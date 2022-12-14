import { useTasks } from '../../store'
import { Task } from '../../types'
import { Priority } from '../../types/constants'
import { FormControl, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import React, { useState, useEffect, FC } from 'react'

const { Low } = Priority

type TaskInputProps = {
  task: Task | undefined
  handleToggle?: () => void
}

/**
 * Component to add or update a given task
 * @param currentTask
 * @returns
 */

export const TaskInput: FC<TaskInputProps> = ({ task, handleToggle }) => {
  const { tasks, addTask, updateTask, selectTaskToView } = useTasks()
  const [, setLocalTask] = useState(task)

  const initialValues: Task = {
    id: tasks?.length,
    title: '',
    subtitle: '',
    notes: '',
    completed: false,
    priority: Low,
    parentId: undefined,
    children: [],
  }

  const [currentTask, setCurrentTask] = useState<Task | undefined>({
    ...initialValues,
  })
  const formTitle = task ? 'Update Task' : 'Create Task'

  useEffect(() => {
    if (task) {
      setCurrentTask(task)
    }
  }, [task])

  const handleSubmit = () => {
    if (currentTask && task && handleToggle) {
      updateTask(currentTask)
      setCurrentTask(initialValues)
      setLocalTask(initialValues)
      handleToggle()
    } else if (currentTask) {
      addTask(currentTask)
      setCurrentTask(initialValues)
    }
  }

  const cancelForm = () => {
    selectTaskToView()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    const { value, name } = event.target
    if (currentTask) {
      setCurrentTask({
        ...currentTask,
        [name]: value,
      })
    }
  }

  return (
    <Grid container sx={inputContainer}>
      <Typography variant={'h5'}>{formTitle}</Typography>
      <Box m={1}>
        <TextField
          sx={textField}
          label="What is your task?"
          size="small"
          variant="outlined"
          name="title"
          value={currentTask?.title}
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <Box m={1}>
        <TextField
          sx={textField}
          label="A little subtext never goes too far..."
          size="small"
          variant="outlined"
          name="subtitle"
          value={currentTask?.subtitle}
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <Box m={1}>
        <TextareaAutosize
          placeholder="Feel free to share more details about the task"
          name="notes"
          value={currentTask?.notes || undefined}
          onChange={(e) => handleChange(e)}
          minRows={9}
          style={{ width: 400 }}
        />
      </Box>

      <Box
        m={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            marginBottom: 2,
          }}
        >
          Make Subtask
        </Typography>
        <FormControl sx={select}>
          <InputLabel htmlFor="parentId">Select Task</InputLabel>
          <Select
            id="parentId"
            name="parentId"
            value={currentTask?.parentId}
            onChange={(e) => handleChange(e)}
          >
            {tasks?.map((task, index) => {
              if (index === tasks.length - 1)
                return (
                  <MenuItem key={task.id} value={undefined}>
                    None
                  </MenuItem>
                )
              if (!task.parentId)
                return (
                  <MenuItem key={task.id} value={task.id}>
                    {task.title}
                  </MenuItem>
                )
            })}
          </Select>
        </FormControl>
      </Box>

      <Box m={1}>
        <FormControl sx={select}>
          <InputLabel htmlFor="priority">Priority</InputLabel>
          <Select
            id="priority"
            name="priority"
            value={currentTask?.priority}
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={Priority.High}>Highest Priority</MenuItem>
            <MenuItem value={Priority.Medium}>Medium Priority</MenuItem>
            <MenuItem value={Priority.Low}>Lowest Priority</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box m={1} sx={buttonContainer}>
        <Button
          disabled={currentTask?.title?.length === 0}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          {task ? 'Update Task' : 'Add Task'}
        </Button>
        <Button
          disabled={currentTask?.title?.length === 0}
          variant="contained"
          color="primary"
          onClick={cancelForm}
        >
          {'Cancel'}
        </Button>
      </Box>
    </Grid>
  )
}

const inputContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
}

const textField = {
  width: 400,
}

const select = {
  minWidth: 100,
}

const buttonContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '85%',
}
