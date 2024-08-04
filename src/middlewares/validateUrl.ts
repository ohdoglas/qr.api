import { NextFunction, Request, Response } from "express";

export async function validateUrl(req: Request, res: Response, next: NextFunction) {
    const { url } = req.body;

    try {
        if (!url || typeof url !== 'string' || !url.startsWith('http')) {
            return res.status(400).json({
                mensagem: 'URL Inválida ou ausente'
            });
        }
        console.log('URL passando pelo middleware:', url)

        next()
    } catch (error) {
        return res.status(500).json({
            mensagem: "Internal error"
        })
    }
}