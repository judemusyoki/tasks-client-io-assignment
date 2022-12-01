import { Task } from '../types'

export const addTask = (newTask: Task, tasks: Task[]) => {
  if (tasks) {
    return [...tasks, newTask]
  }
}
