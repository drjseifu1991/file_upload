import { Image } from './models/image'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Image.sync({ alter: isDev })
}
export default dbInit 