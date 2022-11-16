import { Router, Request, Response} from 'express'
import { ImageInput } from '../../db/models/image'
import * as imageController from '../controller/image'
const path = require('path')
const multer = require('multer')

export const imagesRouter = Router()

interface MulterRequest extends Request {
    file: any;
}


var storage = multer.diskStorage({
    destination: (req:Request, file:any, callBack:any) => {
        callBack(null, './public/images')
    },
    filename: (req:Request, file:any, callBack:any) => {
        // const ext = file.mimetype.split("/")[1];
        callBack(null, `${file.originalname}`);
    }
})

var upload = multer({
    storage: storage
});

imagesRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    imageController.deleteById(id).then(result => {
        return res.status(204).send({
            success: result
        })
    }).catch(err => {
        return res.send({
            success: err
        })
    })
})
imagesRouter.post('/upload', upload.single('image'), (req: Request, res: Response) => {
    const name = (req as MulterRequest).file.filename
    const size = (req as MulterRequest).file.size
    const mb = (size/1024).toFixed().toString()
    // console.log(req)
    // //res.send(size)
    const payload:ImageInput = {name: name, size: mb}
    imageController.create(payload).then(result => {
        return res.status(200).send(result)
    }).catch(err=> {
        return res.status(404).send(err)
    })
    
})

imagesRouter.get('/images', (req: Request, res: Response) => {
    imageController.getAll().then(results => {
        console.log(results)
        return res.send(results)
        
    }).catch(err => {
        console.log(err)
        return res.send(err)
    })
})
