import { useTasks } from '../../store'
import { Task } from '../../types'
import { Priority } from '../../types/constants'
import FlagIcon from '@mui/icons-material/Flag'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, ListItemIcon } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import ListItem from '@mui/material/ListItem'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import React, { FC, useEffect, useState } from 'react'

type TaskItemProps = {
  task: Task
}

const { High, Low } = Priority

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const [hasSubtasks, setHasSubtasks] = useState(false)
  const { toggleTask, selectTaskToView } = useTasks()
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTask, setCurrentTask] = useState<Task>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const flagColor: any = task?.priority === High ? 'error' : 'warning'

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    setHasSubtasks(task.children?.length !== 0)
    setCurrentTask(task)
  }, [task])

  const selectTask = (id: number) => {
    selectTaskToView(id, currentTask?.parentId && currentTask?.parentId)
  }

  const listItem = {
    padding: 0,
    margin: 0,
    minHeight: 'fit-content',
    '&:hover': {
      backgroundColor: '#D6DDEB',
    },
  }

  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <ListItem key={task.id} sx={listItem}>
        {currentTask && (
          <ListItemIcon>
            <Checkbox
              edge="end"
              checked={currentTask?.completed}
              onClick={() => toggleTask(currentTask?.id)}
            />
          </ListItemIcon>
        )}

        <ListItemText
          primary={currentTask?.title}
          onClick={() => selectTask(task.id)}
        />

        <ListItemSecondaryAction onClick={() => toggleExpand()}>
          {hasSubtasks && (
            <ListItemIcon onClick={() => toggleExpand()}>
              <KeyboardDoubleArrowDownIcon />
            </ListItemIcon>
          )}

          {currentTask?.priority !== Low ? (
            <ListItemIcon>
              <FlagIcon color={flagColor} />
            </ListItemIcon>
          ) : (
            <ListItemIcon>
              <FlagIcon color={'disabled'} />
            </ListItemIcon>
          )}
        </ListItemSecondaryAction>
      </ListItem>

      {hasSubtasks && (
        <Collapse
          orientation="vertical"
          in={isExpanded}
          sx={{ margin: 0, minHeight: '5px' }}
        >
          <Box sx={{ marginLeft: 2, marginTop: 0, padding: 0 }}>
            {currentTask?.children?.map((subTask: Task) => {
              return <TaskItem key={subTask.id} task={subTask} />
            })}
          </Box>
        </Collapse>
      )}
    </Box>
  )
}
