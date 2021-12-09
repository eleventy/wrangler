import { toJS } from 'mobx'

const startAnUpload = async ({ driveStore }) => {
  try {
    const filesToCopyTodo = driveStore.filesToCopyTodo.map(file => toJS(file))
    const result = await window.api.drives_startAnUpload(filesToCopyTodo)
    if (result.error) {
      console.log(JSON.stringify(result.error, Object.getOwnPropertyNames(result.error)))
      console.error(result.error)
      driveStore._uiStore.setAlertState({ open: true, message: result.error.message, severity: 'error' })
    }
    driveStore._uiStore.setAppState('notready')

    // Update all sources and destinations to current state
    driveStore.scanAllDrives()
  } catch (err) {
    console.error(err)
  }
}
export default startAnUpload
