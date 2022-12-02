import { Task } from '../types'

/**
 * Function to add new task
 * @param newTask
 * @param tasks
 * @returns updated list of tasks with new task added
 */
export const addTask = (newTask: Task, tasks: Task[]) => {
  if (tasks) {
    return [...tasks, newTask]
  }
}
