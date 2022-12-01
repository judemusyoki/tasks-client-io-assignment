export type Task = {
  id: number
  title: string
  subtitle?: string
  notes?: string
  completed: boolean
  priority?: string
  parentId?: number
  children?: Task[]
}
