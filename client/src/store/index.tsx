/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-empty-function */
import useLocalStorage from '../lib/useLocalStorage'
import { Task } from '../types/index'
import { SAMPLE_DATA } from './sampleData'
import React, { useContext, useState, createContext } from 'react'

export type TaskContext = {
  tasks: Task[]
  currentTaskDisplayed: Task | undefined
  currentTaskToEdit: Task | undefined
  addTask: (newTask: Task, tasks: Task[]) => void
  updateTask: (currentTask: Task) => void
  selectTaskToView: (id?: number, parentId?: number) => void
  selectTaskToEdit: (id?: number, parentId?: number) => void
  removeTask: (id: number | undefined) => void
  toggleTask: (id: number) => void
}
const addTask = (newTask: Task, tasks: Task[]) => {
  if (tasks) {
    return [...tasks, newTask]
  }
}

const Context = createContext<TaskContext>(
  // Default context
  {
    tasks: [],
    currentTaskDisplayed: undefined,
    currentTaskToEdit: undefined,
    addTask,
    updateTask: () => {},
    selectTaskToView: () => {},
    selectTaskToEdit: () => {},
    removeTask: () => {},
    toggleTask: () => {},
  },
)

const Provider = (props: { children: any }) => {
  const [currentTaskDisplayed, setCurrentTaskDisplayed] = useState<any>()
  const [currentTaskToEdit, setCurrentTaskToEdit] = useState<any>()
  const { children } = props

  const [tasks, setTasks] = useLocalStorage('tasks', [...SAMPLE_DATA])

  // Function to select which taks to display
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

  // Function to select which task to update task
  const selectTaskToEdit = (id?: number, parentId?: number) => {
    if (id && parentId) {
      const parentTask = tasks?.find((task: Task) => task.id === parentId)

      const currentTaskToEdit: Task = parentTask?.children?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskToEdit(currentTaskToEdit)
    } else if (id) {
      const currentTaskToEdit: Task = tasks?.find(
        (task: Task) => task.id === id,
      )
      setCurrentTaskToEdit(currentTaskToEdit)
    } else {
      setCurrentTaskToEdit(undefined)
    }
  }

  // Function to update a task
  const updateTask = (newTask: Task) => {
    if (newTask.parentId) {
      const parentTask: Task = tasks?.find(
        (task: Task) => task.id === newTask.parentId,
      )

      if (parentTask?.children) {
        // Update child task of ParentTask
        const updatedParentTask = parentTask.children.map((childTask) => {
          if (childTask.id === newTask.id) {
            return newTask
          }
          return childTask
        })
        const newTasks = tasks?.map((task: Task) => {
          // Add updated child task to newTasks array
          if (task.id === newTask.id) {
            return newTask
          }
          // Add updated parent task to newTasks array
          if (task.id === parentTask.id) {
            return parentTask
          }
          return task
        })
        setTasks(newTasks)
      }
    } else {
      const newTasks = tasks?.map((task: Task) => {
        if (task.id === newTask.id) {
          return newTask
        }
        return task
      })
      setTasks(newTasks)
    }
  }

  const removeTask = (id: number | undefined ) => {
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

  return (
    <Context.Provider
      value={{
        tasks,
        currentTaskDisplayed,
        currentTaskToEdit,
        addTask,
        updateTask,
        selectTaskToView,
        selectTaskToEdit,
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
