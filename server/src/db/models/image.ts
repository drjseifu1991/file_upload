import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../../config'

interface ImageAttributes {
  id: number;
  name: string;
  size: string;
  createdAt?: Date;
}
export interface ImageInput extends Optional<ImageAttributes, 'id'> {}
export interface ImageOuput extends Required<ImageAttributes> {}

export class Image extends Model<ImageAttributes, ImageInput> implements ImageAttributes {
  public id!: number
  public name!: string
  public size!: string
  // timestamps!
  public readonly createdAt!: Date;

}

Image.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})
