import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/como_escoger_la_moticleta_adecuada_ZOTIAN.pdf')
const imageBuffer = fs.readFileSync(filePath)

export default function (req, res) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=como_escoger_la_moticleta_adecuada_ZOTIAN.pdf');
    res.send(imageBuffer)
}