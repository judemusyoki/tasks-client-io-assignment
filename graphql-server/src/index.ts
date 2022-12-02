import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import path from 'path'
import { PrismaClient } from '@prisma/client'

import { resolvers } from '../prisma/generated/type-graphql'

interface Context {
  prisma: PrismaClient
}
const port = Number(process.env.API_PORT) || 4000
const prisma = new PrismaClient()

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false,
  })

  await prisma.$connect()

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  })
  server.listen(port)
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
}

main().catch(console.error)
