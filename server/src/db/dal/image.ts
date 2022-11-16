import {Image} from '../models/image'
import {ImageInput, ImageOuput} from '../models/Image'


export const create = async (payload: ImageInput): Promise<ImageOuput> => {
    const image = await Image.create(payload)
    return image
}


export const deleteById = async (id: number): Promise<boolean> => {
    const deletedImageCount = await Image.destroy({
        where: {id}
    })
    return !!deletedImageCount
}

export const getAll = async (): Promise<ImageOuput[]> => {
    return Image.findAll()
}
export const getByPk =async (id: number) => {
    return Image.findByPk(id)
}