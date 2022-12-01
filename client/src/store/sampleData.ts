import { Task } from '../types'
import { Priority } from '../types/constants'

const { High, Medium, Low } = Priority

const subTask1 = {
  id: 4,
  title: 'buy dog food',
  subtitle: 'sub feed',
  notes: 'dog stuff to be dealt with',
  completed: false,
  priority: High,
  parentId: 1,
  children: [],
}

const subTask2 = {
  id: 5,
  title: 'look for dog',
  subtitle: 'sub feed',
  notes: 'dog stuff to be dealt with',
  completed: false,
  priority: Low,
  parentId: 1,
  children: [],
}

export const SAMPLE_DATA: Task[] = [
  {
    id: 1,
    title: 'feed the dog',
    subtitle: 'sub feed',
    notes: 'dog stuff to be dealt with',
    completed: false,
    priority: High,
    parentId: undefined,
    children: [subTask1, subTask2],
  },
  {
    id: 2,
    title: 'go shopping',
    subtitle: 'shopping stuff',
    notes: 'stuff about shopping is difficult',
    completed: false,
    priority: Medium,
    parentId: undefined,
    children: [],
  },
  {
    id: 3,
    title: 'read the book',
    subtitle: 'library ',
    notes: 'stuff about books is difficult',
    completed: true,
    priority: Low,
    parentId: undefined,
    children: [],
  },
  { ...subTask1 },
  { ...subTask2 },
]
