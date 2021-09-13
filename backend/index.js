'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

app.register(require('fastify-cors'), {
  origin: (origin, cb) => {
    if (/localhost/.test(origin)) {
      //  Request from localhost will pass
      cb(null, true)
      return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"))
  }
})

const schema = `
  type User {
    id: ID!
    likesCheese: Boolean!
  }

  type Query {
    me: User
  }
`

const resolvers = {
  Query: {
    me: async (_, obj) => {
      throw new Error("Unauthenticated");
    }
  }
}

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true
})

app.get('/', async function (req, reply) {
  const query = '{ add(x: 2, y: 2) }'
  return reply.graphql(query)
})

app.listen(3000)
