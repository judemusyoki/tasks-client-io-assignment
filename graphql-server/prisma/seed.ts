import { PrismaClient } from '@prisma/client'
import { Task } from './generated/type-graphql'
import { Priority } from './generated/type-graphql/enums'

const prisma = new PrismaClient()
const { HIGH, MEDIUM, LOW } = Priority

const subTask1 = {
  title: 'buy dog food',
  subtitle: 'sub feed',
  notes: 'dog stuff to be dealt with',
  completed: false,
  priority: HIGH,
  parentId: 1,
} as Task

const subTask2 = {
  title: 'look for dog',
  subtitle: 'sub feed',
  notes: 'dog stuff to be dealt with',
  completed: false,
  priority: HIGH,
  parentId: 1,
} as Task

async function main() {
  // Delete all `User` and `Message` records
  await prisma.task.deleteMany({})
  await prisma.user.deleteMany({})
  // (Re-)Create dummy `User` and `Task` records
  await prisma.user.create({
    data: {
      userName: 'Jack',
      tasks: {
        create: [
          {
            title: 'feed the dog',
            subtitle: 'sub feed',
            notes: 'dog stuff to be dealt with',
            completed: false,
            priority: HIGH,
            children: [subTask1, subTask2],
          },
          { ...subTask1 },
          { ...subTask2 },
          {
            title: 'go shopping',
            subtitle: 'shopping stuff',
            notes: 'stuff about shopping is difficult',
            completed: false,
            priority: MEDIUM,
          },
          {
            title: 'read the book',
            subtitle: 'library ',
            notes: 'stuff about books is difficult',
            completed: true,
            priority: LOW,
          },
        ],
      },
    },
  })
}

main().then(() => {
  console.log(`Data seeded...	🌱`)
})
