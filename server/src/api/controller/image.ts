import * as service from '../service/imageServices'
import {ImageInput, ImageOuput} from '../../db/models/image'
const fs = require('fs')

export const create = async(payload:ImageInput): Promise<ImageOuput> => {
    return await service.create(payload)
}

export const deleteById = async(id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(): Promise<ImageOuput[]> => {
    return await service.getAll()
}
export const getById = async(id: number) => {
    return await service.getByPk(id)
}