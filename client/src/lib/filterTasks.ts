import { useMemo, useState } from 'react'
import { Task } from '../types'
import { Filter } from '../types/constants'

const { ALL, COMPLETED, NOT_COMPLETED } = Filter

export const FilterTasks = (tasks: Task[], currentFilter: Filter): Task[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState(currentFilter || ALL)

  const filteredTasks = useMemo(() => {
    if (tasks) {
      switch (filter) {
        case ALL:
          return tasks
        case COMPLETED:
          return tasks?.filter((task: Task) => task.completed)
        case NOT_COMPLETED:
          return tasks.filter((currentTask: Task) => !currentTask.completed)
      }
    }
  }, [tasks, filter]) as Task[]

  return filteredTasks
}
