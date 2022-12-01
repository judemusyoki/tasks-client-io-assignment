import { withProvider, useTasks } from '../store'
import { Filter } from '../types/constants'
import { TaskList } from './Tasks'
import { TaskDisplay } from './Tasks/Display'
import { TaskFilters } from './Tasks/Filters'
import { TaskInput } from './Tasks/Input'
import { Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'

const { ALL } = Filter

const MainContainer = () => {
  // const { currentTaskDisplayed, currentTaskToEdit } = useTasks()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFilter] = useState(ALL)

  const handleFilter = (selection: Filter) => {
    setFilter(selection)
  }

  return (
    <Box sx={mainContainer}>
      <Box sx={gridContainer} p={2}>
        <Grid item>
          <Typography variant={'h5'}>Your Tasks</Typography>

          <TaskFilters handleFilter={handleFilter} />
          <TaskList />
        </Grid>
      </Box>
      <Divider />

      {/* <Box sx={gridContainer} p={2}>
        <Grid container direction="column">
          <Grid item>
            {currentTaskDisplayed ? (
              <TaskDisplay currentTask={currentTaskDisplayed} />
            ) : (
              <TaskInput task={currentTaskToEdit} />
            )}
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  )
}

// Anything within Home component will be able to use withProvider
export default MainContainer

const mainContainer = {
  display: 'flex',
  flexDirection: 'row',
  width: 1000,
  minHeight: 600,
}

const gridContainer = {
  width: '50%',
}
// const noteContainer = {
//   width: '50%',
// }
