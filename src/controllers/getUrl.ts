import { Request, Response } from "express";
import { generateQR } from "../services/qrCodeGen";

export async function QrResponse(req: Request, res: Response) {
    const { url } = req.body;

    try {

        console.log('Recebendo URL para gerar QR code (controlador):', url);
        const response = await generateQR(url);

        return res.status(200).json({ qrCode: response });
    } catch (error) {
        return res.status(500).json({
            mensagem: "Internal controller Error"
        })
    }
}