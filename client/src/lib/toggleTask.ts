import {
  UpdateOneTaskMutationVariables,
  UpdateOneTaskDocument,
  Task,
  TaskUpdateInput,
  Exact,
} from '../graphql/generated'
import { GetTasks } from './getTasks'
import { useEffect, useState } from 'react'
import { useMutation } from 'urql'

export const ToggleTask = () => {
  // const [loading, setLoading] = useState<boolean>(true)
  const { tasks } = GetTasks()

  const [updateOneTaskResult, updateOneTask] = useMutation(
    UpdateOneTaskDocument,
  )

  // if (tasks) {
  //   tasks[1].completed = !tasks[1].completed
  //   const variables: Exact<{ data: TaskUpdateInput; taskId: number }> = {
  //     data: { ...tasks[1] } as TaskUpdateInput,
  //     taskId: tasks[1].id,
  //   } as UpdateOneTaskMutationVariables
  //   updateOneTask(variables).then((result) => {
  //     console.log('RESULT....', updateOneTaskResult)
  //     // The result is almost identical to `updateTodoResult` with the exception
  //     // of `result.fetching` not being set.
  //     // It is an OperationResult.
  //   })
  // }
}
