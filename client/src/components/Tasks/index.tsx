import { FilterTasks } from '../../lib/filterTasks'
import { useTasks } from '../../store/index'
import { Filter } from '../../types/constants'
import { Task } from '../../types/index'
import { TaskItem } from './Item'
import List from '@mui/material/List'
import React, { FC } from 'react'

const { ALL } = Filter

type TaskListProps = {
  subTasks?: Task[] | undefined
}

export const TaskList: FC<TaskListProps> = ({ subTasks }) => {
  // const { tasks: fetchedTasks } = GetTasks()
  const { tasks } = useTasks()

  const parentTasks = tasks?.filter((task: Task) => !task.parentId)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentTasks: any = subTasks ? subTasks : parentTasks

  const filteredTasks = FilterTasks(currentTasks, ALL)

  console.log('FILTERED', filteredTasks)

  return (
    <List dense={true}>
      {filteredTasks?.map((task: Task) => {
        return <TaskItem key={task.id} task={task} />
      })}
    </List>
  )
}
