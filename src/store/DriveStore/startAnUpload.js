import { toJS } from 'mobx'

const startAnUpload = async ({ driveStore }) => {
  console.log('starting Upload...')
  console.log(driveStore.filesToCopy.length)
  const result = await window.api.drives_startAnUpload( toJS(driveStore.filesToCopy))
  if(result.error) { 
    console.error(result.error)
    driveStore._uiStore.setAlertState({ open: true, message: result.error.message, severity:'error' })
  }
  if(result.success) { driveStore._uiStore.setAppState('standby') }
}
export default startAnUpload