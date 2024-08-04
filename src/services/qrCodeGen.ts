import QRCode from "qrcode";
import fs from 'fs'
import path from 'path'

var options: QRCode.QRCodeToDataURLOptionsOther = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    margin: 1,
    color: {
        dark:"#000000",
        light: "#FFFFFF"
    }

}

export async function generateQR(url: string) {
    try {
        if (typeof url !== 'string' || !url.startsWith('http')) {
            throw new Error('URL inválida');
        }
        console.log('Gerando QR code para URL (serviço):', url);
        const QRResponse = await QRCode.toDataURL(url, options);

        const filePath = path.join(__dirname, '../public/data/qrCode.png');

        const base64Data = QRResponse.replace(/^data:image\/png;base64,/, "");

        fs.writeFileSync(filePath, base64Data, 'base64');

        console.log('QR Code salvo em:', filePath);

        return QRResponse;
    } catch (err) {
        console.log('Erro ao gerar QR Code:', err)
        throw err;
    }
}
