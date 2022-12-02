import { Task } from '../types'

/**
 * Function to get the parent task of the subTask
 * @param subTask
 * @returns
 */
export const getParentTask = (subTask: Task, tasks: Task[]): Task => {
  const parentTask = tasks.find((task: Task) => task.id === subTask.parentId)
  return parentTask as Task
}
