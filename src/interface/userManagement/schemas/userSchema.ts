import { gql } from 'apollo-server-express'

export const userSchema = gql`
  type Query {
    user(id: ID!): User
    users(limit: Int): [User]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, gender: String!, birthDate: String): User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    gender: String!
    birthDate: String
    profile: Profile
  }
`
