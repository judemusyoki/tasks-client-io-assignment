import { useTasks } from '../../store/index'
import { Filter } from '../../types/constants'
import { Task } from '../../types/index'
import { TaskItem } from './Item'
import List from '@mui/material/List'
import React, { FC, useEffect, useMemo, useState } from 'react'

const { ALL, COMPLETED, NOT_COMPLETED } = Filter

type TaskListProps = {
  filter: Filter
}

export const TaskList: FC<TaskListProps> = ({ filter }) => {
  // const { tasks: fetchedTasks } = GetTasks()
  const [localTasks, setLocalTasks] = useState<Task[]>()
  const { tasks } = useTasks()

  useEffect(() => {
    setLocalTasks(tasks)
  }, [tasks])

  const parentTasks = localTasks?.filter(
    (localTask: Task) => !localTask.parentId,
  )

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case ALL:
        return parentTasks
      case COMPLETED:
        return parentTasks?.filter((task: Task) => task.completed)
      case NOT_COMPLETED:
        return parentTasks?.filter((parentTask: Task) => !parentTask.completed)
    }
  }, [parentTasks, filter])

  return (
    <List dense={true}>
      {filteredTasks?.map((task: Task) => {
        return <TaskItem key={task.id} task={task} />
      })}
    </List>
  )
}
