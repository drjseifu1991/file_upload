import { create as imageCreate, deleteById as imageDelete, getAll as imageGet, getByPk as getById} from '../../db/dal/image'
import {ImageInput, ImageOuput} from '../../db/models/image'

export const create = (payload: ImageInput): Promise<ImageOuput> => {
    return imageCreate(payload)
}
export const deleteById = (id: number): Promise<boolean> => {
    return imageDelete(id)
}
export const getAll = (): Promise<ImageOuput[]> => {
    return (imageGet())
}
export const getByPk = (id: number) => {
    return (getById(id))
}