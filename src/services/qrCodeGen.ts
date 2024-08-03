import QRCode from "qrcode";

var options: QRCode.QRCodeToDataURLOptionsOther = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    margin: 1,
    color: {
        dark:"#010599FF",
        light: "#FFBF60FF"
    }

}

export async function generateQR(url: string) {
    try {
        console.log(await QRCode.toDataURL(url, options))
    } catch (err) {
        console.log(err)
    }
}

generateQR("www.google.com.br")