import { knex } from '../../../dataAccess/database/knex/dbConnection'

const tableName = 'users'
export const usersTable = knex(tableName)
