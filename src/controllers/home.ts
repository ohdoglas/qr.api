import { Request, Response } from "express";



export async function home(req: Request, res: Response) {
    return res.status(200).json({
        mensagem: "QR.API running great! V.0.0.1"
    })
}