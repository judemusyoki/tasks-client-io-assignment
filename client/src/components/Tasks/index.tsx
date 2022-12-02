import { useTasks } from '../../store/index'
import { Filter } from '../../types/constants'
import { Task } from '../../types/index'
import { TaskItem } from './Item'
import List from '@mui/material/List'
import React, { FC, useMemo } from 'react'

const { ALL, COMPLETED, NOT_COMPLETED } = Filter

type TaskListProps = {
  filter: Filter
  subTasks?: Task[] | undefined
}

export const TaskList: FC<TaskListProps> = ({ subTasks, filter }) => {
  // const { tasks: fetchedTasks } = GetTasks()
  const { tasks } = useTasks()

  const parentTasks = tasks?.filter((task: Task) => !task.parentId)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentTasks: any = subTasks ? subTasks : parentTasks

  const filteredTasks = useMemo(() => {
      switch (filter) {
        case ALL:
          return currentTasks
        case COMPLETED:
          return currentTasks.filter((task: Task) => task.completed)
        case NOT_COMPLETED:
          return currentTasks.filter((currentTask: Task) => !currentTask.completed)
      }
    
  }, [currentTasks, filter])

  return (
    <List dense={true}>
      {filteredTasks?.map((task: Task) => {
        return <TaskItem key={task.id} task={task} />
      })}
    </List>
  )
}
