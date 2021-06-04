import { makeAutoObservable, runInAction, toJS } from "mobx"

const pollDrives = async ({ self }) => {
  const rawList =  await window.api.getDriveList()
  const allDrives = parseRawList(rawList)
  runInAction( () => {
    self._drivelist = allDrives
  })
}
export default pollDrives

//////

const parseRawList = rawlist => {
  const allDrives = []
  if(!rawlist || !rawlist.length) return allDrives
  rawlist.forEach( rawdrive => {
    if(!rawdrive.mountpoints || !rawdrive.mountpoints.length) { return }
    rawdrive.mountpoints.forEach( drive => {
      allDrives.push({
        path: drive.path
      })
    })
  })
  return allDrives
}