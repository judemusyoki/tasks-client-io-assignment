import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Filter } from '../../types/constants'

const { ALL, COMPLETED, NOT_COMPLETED, DUE } = Filter

type TaskFiltersProps = {
  handleFilter: (selection: Filter) => void
}

export const TaskFilters: FC<TaskFiltersProps> = ({
  handleFilter,
}): JSX.Element => {
  const handleSelection = (selection: Filter) => {
    handleFilter(selection)
  }

  return (
    <Box marginTop={1}>
      <Box p={1} component='span'>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSelection(ALL)}
        >
          {ALL}
        </Button>
      </Box>
      <Box p={1} component='span'>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSelection(COMPLETED)}
        >
          {COMPLETED}
        </Button>
      </Box>
      <Box p={1} component='span'>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSelection(NOT_COMPLETED)}
        >
          {DUE}
        </Button>
      </Box>
    </Box>
  )
}
