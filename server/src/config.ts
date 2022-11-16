import { Dialect, Sequelize } from 'sequelize'

const dbName = 'merahitechnologi_fileUpload'
const dbUser = 'merahitechnologi_drj'
const dbHost = 'merahitechnologies.com'
const dbDriver = 'mysql'
const dbPassword = 'Ethiopia1991'
const port = 3306

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver,
  host: dbHost,
  port: port
})

export default sequelizeConnection