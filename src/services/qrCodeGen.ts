import QRCode from "qrcode";

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
        console.log('Gerando QR code para URL (serviço):', url)
        const QRResponse = await QRCode.toDataURL(url, options)
        return QRResponse;
    } catch (err) {
        console.log('Erro ao gerar QR Code:', err)
        throw err;
    }
}
