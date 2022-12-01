import { useEffect, useState } from 'react'
import { useQuery } from 'urql'
import {
  GetTasksDocument,
  GetTasksQueryVariables,
  Task,
} from '../graphql/generated'

export const GetTasks = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [tasks, setTasks] = useState<Task[]>()

  const [{ data, fetching }] = useQuery<GetTasksQueryVariables>({
    query: GetTasksDocument,
  })

  useEffect(() => {
    setLoading(fetching)
  }, [fetching])

  useEffect(() => {
    if (data) {
      const { tasks } = data
      setTasks(tasks as Task[])
    }
  }, [data])

  return { loading, tasks }
}
