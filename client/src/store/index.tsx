/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-empty-function */
import useLocalStorage from '../lib/useLocalStorage'
import { Task } from '../types/index'
import { SAMPLE_DATA } from './sampleData'
import React, { useContext, useState, createContext, useEffect } from 'react'
import { getParentTask } from '../lib'

export type TaskContext = {
  tasks: Task[]
  currentTaskDisplayed: Task | undefined
  currentTaskToUpdate: Task | undefined
  addTask: (newTask: Task) => void
  updateTask: (currentTask: Task) => void
  selectTaskToView: (id?: number, parentId?: number) => void
  selectTaskToUpdate: (id?: number, parentId?: number) => void
  removeTask: (id: number | undefined) => void
  toggleTask: (id: number) => void
}

const Context = createContext<TaskContext>(
  // Default context
  {
    tasks: [],
    currentTaskDisplayed: undefined,
    currentTaskToUpdate: undefined,
    addTask: () => {},
    updateTask: () => {},
    selectTaskToView: () => {},
    selectTaskToUpdate: () => {},
    removeTask: () => {},
    toggleTask: () => {},
  },
)

const Provider = (props: { children: any }) => {
  const [currentTaskDisplayed, setCurrentTaskDisplayed] = useState<any>()
  const [currentTaskToUpdate, setCurrentTaskToUpdate] = useState<any>()
  const { children } = props

  const [tasks, setTasks] = useLocalStorage('tasks', [...SAMPLE_DATA])

  const updateChildren = (task: Task, updatedSubTask: Task) => {
    return task.children?.map((subTask) => {
      if (subTask.id === updatedSubTask.id) {
        return updatedSubTask
      }
      return subTask
    })
  }

  /**
   * Function to add a new task
   * @param newTask
   */
  const addTask = (newTask: Task) => {
    // Add new subTask
    if (newTask.parentId) {
      const parentTask = getParentTask(newTask, tasks)
      parentTask?.children?.push(newTask)

      const newTasks = tasks?.map((task: Task) => {
        // Add updated parent task to newTasks array
        if (task.id === parentTask.id) {
          return parentTask
        }
        return task
      })
      // Replace tasks with new Tasks array and add new subTask
      setTasks([...newTasks, newTask])
    }
    // Add new task
    setTasks([...tasks, newTask])
  }

  /**
   * Function to select which task to view
   * @param id
   * @param parentId
   */
  const selectTaskToView = (id?: number, parentId?: number) => {
    if (id && parentId) {
      const parentTask = tasks?.find((task: Task) => task.id === parentId)

      const currentTaskDisplayed = parentTask?.children?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskDisplayed(currentTaskDisplayed)
    } else if (id) {
      const currentTaskDisplayed: Task = tasks?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskDisplayed(currentTaskDisplayed)
    } else if (!id && !parentId) {
      setCurrentTaskDisplayed(undefined)
    }
  }

  /**
   * Function to select which task to update
   * @param id
   * @param parentId
   */
  const selectTaskToUpdate = (id?: number, parentId?: number) => {
    if (id && parentId) {
      const parentTask = tasks?.find((task: Task) => task.id === parentId)

      const currentTaskToUpdate: Task = parentTask?.children?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskToUpdate(currentTaskToUpdate)
    } else if (id) {
      const currentTaskToUpdate: Task = tasks?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskToUpdate(currentTaskToUpdate)
    } else {
      setCurrentTaskToUpdate(undefined)
    }
  }

  /**
   * Function to update a task or subtask
   * @param updatedTask
   */
  const updateTask = (updatedTask: Task) => {
    if (updatedTask.parentId) {
      // Update subTask
      const parentTask: Task = tasks?.find(
        (task: Task) => task.id === updatedTask.parentId,
      )
      const updatedSubTasks = updateChildren(parentTask, updatedTask)
      parentTask.children = updatedSubTasks

      const newTasks = tasks?.map((task: Task) => {
        // Add updated child task to newTasks array
        if (task.id === updatedTask.id) {
          return updatedTask
        }
        // Add updated parent task to newTasks array
        if (task.id === parentTask.id) {
          return parentTask
        }
        return task
      })
      setTasks([...newTasks])
    }

    // Update task
    const newTasks = tasks?.map((task: Task) => {
      if (task.id === updatedTask.id) {
        return updatedTask
      }
      return task
    })
    setTasks(newTasks)
  }

  const removeTask = (id: number | undefined) => {
    const newTasks = tasks?.filter((task: Task) => task.id !== id)
    setTasks(newTasks)
    setCurrentTaskDisplayed(undefined)
  }

  const toggleTask = (id: number) => {
    const foundTask = tasks?.find((task: Task) => task.id === id)
    if (foundTask) {
      foundTask.completed = !foundTask.completed
    }

    const newTasks = tasks?.map((task: Task) => {
      if (task.id === id) {
        return foundTask as Task
      }
      return task as Task
    })
    setTasks(newTasks)
  }

  useEffect(() => {}, [tasks])

  return (
    <Context.Provider
      value={{
        tasks,
        currentTaskDisplayed,
        currentTaskToUpdate,
        addTask,
        updateTask,
        selectTaskToView,
        selectTaskToUpdate,
        removeTask,
        toggleTask,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useTasks = () => useContext(Context)

export const withProvider = (Component: any) => {
  // eslint-disable-next-line react/display-name
  return (props: JSX.IntrinsicAttributes) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    )
  }
}
