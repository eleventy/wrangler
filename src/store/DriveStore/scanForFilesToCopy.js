import path from 'path'

const CARD_PREFIX = 'Card-'
const CARD_REGEX = new RegExp(`.*/${CARD_PREFIX}(...)`)
/*
  scan all drives for files not in one of the backup drives
    For each destination, see which sourcefiles are missing.
    Put them in a new 'Card', unless some sourcefiles are already in a older Card.
    In that case, add them also to the same old card
      ( Unless there is a name collision, then put all new files in a new Card )
*/

const scanForFilesToCopy = ({ driveStore }) => {
  const uiStore = driveStore._uiStore
  driveStore._filesToCopy = []
  if (drivesNotReady(driveStore)) { return }

  driveStore.destinationDrives.forEach(destinationDrive => {
    driveStore.sourceDrives.forEach(sourceDrive => {
      const filesToCopyFromThisCard = []
      let forceOldCard
      let forceNewCard
      const newCard = getNewCard({ destinationDrive })

      sourceDrive.files.forEach(sourceFile => {
        const { srcIsInDestination, isSameFile, oldCard } = sourceFileIsInDestinationDrive({ sourceFile, destinationDrive })
        if (!srcIsInDestination) {
          // New file, not in destination => add to copylist
          filesToCopyFromThisCard.push({
            sourcePath: sourceFile.path,
            size: sourceFile.size,
            status: 'todo'
          })
        } else {
          // filename already exists in destination
          if (isSameFile && !forceNewCard) {
            // identical file, so skip copy, but send new files to this cardFolder( new clips added later on same card)
            forceOldCard = oldCard
            filesToCopyFromThisCard.push({
              sourcePath: sourceFile.path,
              size: sourceFile.size,
              status: 'done'
            })
          } else {
            // We have a name collision with existing file.  Send this file and all other clips to newCard
            forceNewCard = newCard
            filesToCopyFromThisCard.push({
              sourcePath: sourceFile.path,
              size: sourceFile.size,
              status: 'todo'
            })
          }
        }
      })
      // We have all files for this card, add the final destination
      const destinationCardName =
        forceNewCard || (forceOldCard || newCard)
      const destinationPath = path.join(
        destinationDrive.path,
        destinationDrive.rootFolder,
        driveStore._uiStore.activeProject,
        driveStore._uiStore.dateFolder,
        sourceDrive.label,
        destinationCardName
      )
      filesToCopyFromThisCard.forEach(file => { file.destinationPath = destinationPath })
      driveStore._filesToCopy = [...driveStore._filesToCopy, ...filesToCopyFromThisCard]

      if (driveStore._filesToCopy.filter(file => file.status === 'todo').length) {
        if (forceNewCard) {
          driveStore._uiStore.setAlertState({
            open: true,
            message: 'Name collision. A different clip with the same name already exists.  All new clips will be copied to a separate folder',
            severity: 'warning'
          })
        } else if (forceOldCard) {
          driveStore._uiStore.setAlertState({
            open: true,
            message: 'Some clips are already in destination.  New clips will be added to the same folder',
            severity: 'info'
          })
        }
        // ready to go
        uiStore.setAppState('standby')
      }
    })
  })
}

export default scanForFilesToCopy

/// /////////////////////

const drivesNotReady = driveStore => {
  // Wait until all drives have been scanned
  const todoSourceDrives = driveStore.sourceDrives.filter(drive => drive.status === 'ready')
  const todoDestinationDrives = driveStore.destinationDrives.filter(drive => drive.status === 'ready')
  return !todoSourceDrives.length || !todoDestinationDrives.length
}

/// ///////////////

const sourceFileIsInDestinationDrive = ({ sourceFile, destinationDrive }) => {
  const foundDestinationFile = destinationDrive.files.find(
    destFile => path.basename(destFile.path) === path.basename(sourceFile.path)
  )
  if (!foundDestinationFile) return { srcIsInDestination: false, isSameFile: false }

  // double check that source and destination are the same
  if (foundDestinationFile.size !== sourceFile.size) {
    return { srcIsInDestination: true, isSameFile: false }
  }
  if (foundDestinationFile.modified.getTime() !== sourceFile.modified.getTime()) {
    return { srcIsInDestination: true, isSameFile: false }
  }
  const regex = path.dirname(foundDestinationFile.path).match(CARD_REGEX)
  return { srcIsInDestination: true, isSameFile: true, oldCard: CARD_PREFIX + regex[1] }
}

/// //////////////

const getNewCard = ({ destinationDrive }) => {
  //    if dest has no folders, make a new Card-001
  //        else, make a new folder highestCard+1
  if (!destinationDrive.files.length) return 'Card-001'

  const existingCards = destinationDrive.files
    .map(file => {
      const regex = path.dirname(file.path).match(CARD_REGEX)
      if (!regex || !regex.length || regex.length !== 2) { return 1 }
      return regex[1]
    })

  const highestCardNr = existingCards
    .reduce((acc, curr) => curr > acc ? curr : acc)
  const destinationCardNr = (parseInt(highestCardNr) + 1)
    .toString()
    .padStart(3, '0')
  return CARD_PREFIX + destinationCardNr // Card- + 00X
}
