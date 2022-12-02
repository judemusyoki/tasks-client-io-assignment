import { Task } from '../types'

/**
 * Function to select task
 * @param tasks
 * @param id
 * @param parentId
 * @returns selected task or unselects a task
 */

export const selectTask = (tasks: Task[], id?: number, parentId?: number) => {
  if (id && parentId) {
    const parentTask = tasks?.find((task: Task) => task.id === parentId)

    const currentTaskToEdit = parentTask?.children?.find(
      (task: Task) => task.id === id,
    )
    return currentTaskToEdit
    // setCurrentTaskToEdit(currentTaskToEdit)
  } else if (id) {
    const currentTaskToEdit = tasks?.find((task: Task) => task.id === id)
    return currentTaskToEdit
    // setCurrentTaskToEdit(currentTaskToEdit)
  } else {
    return undefined
    // setCurrentTaskToEdit(undefined)
  }
}
