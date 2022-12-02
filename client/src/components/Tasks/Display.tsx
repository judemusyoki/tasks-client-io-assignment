import { useTasks } from '../../store'
import { Task } from '../../types'
import { TaskInput } from '../Tasks/Input'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import React, { FC, useState } from 'react'

type TaskDisplayProps = {
  currentTask: Task | undefined
}

/**
 * Component to display a specific task
 * @param currentTask
 * @returns
 */

export const TaskDisplay: FC<TaskDisplayProps> = ({ currentTask }) => {
  const [toggleForm, setToggleForm] = useState(false)
  const { selectTaskToView, removeTask } = useTasks()

  const handleClick = () => {
    selectTaskToView()
  }

  const handleEdit = () => setToggleForm(!toggleForm)

  if (toggleForm)
    return <TaskInput task={currentTask} handleToggle={handleClick} />
  else
    return (
      <Paper sx={taskItemContainer} elevation={8}>
        <IconButton onClick={handleClick}>
          <CloseIcon />
        </IconButton>
        <Box sx={taskItem} p={3}>
          <Typography variant="h4">{currentTask?.title}</Typography>
          <Typography variant="subtitle1">{currentTask?.subtitle}</Typography>
          <Typography variant="body2">{currentTask?.notes}</Typography>
        </Box>

        <IconButton onClick={() => handleEdit()}>
          <EditIcon />
        </IconButton>
        
        <IconButton onClick={() => removeTask(currentTask?.id)}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    )
}

const taskItemContainer = {
  borderRadius: 5,
}

const taskItem = {
  width: '100%',
  minHeight: 200,
}
