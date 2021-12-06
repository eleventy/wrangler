import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'store'
import LinearProgress from '@mui/material/LinearProgress'
import Paper from '@mui/material/Paper'
import filesize from 'filesize'
import Typography from '@mui/material/Typography'

const StatsPanel = observer(() => {
  const store = useContext(Context)

  const percent = store.ui.currentProgress.percent ? store.ui.currentProgress.percent * 100 : 0
  const currentCompleted = store.ui.currentProgress.completedSize ? store.ui.currentProgress.completedSize : 0
  const previousCompleted = store.ui.previousProgress.completedSize ? store.ui.previousProgress.completedSize : 0
  const speed = (currentCompleted - previousCompleted) / (store.ui.settings.pollingInterval / 1000)

  return (
    <Paper style={styles.root}>
      <LinearProgress variant='determinate' value={percent} style={styles.progress} color='secondary' />
      <Typography variant='caption' display='block' color='textSecondary' style={styles.stats}>
        {`${Math.round(percent)}% | ${filesize(speed)}/s`}
      </Typography>
    </Paper>
  )
})
export default StatsPanel

/// ///////////

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
    margin: 5
  },
  progress: {
    height: 10,
    width: '100%'
  },
  stats: {
    width: 160,
    paddingLeft: 5
  }
}
