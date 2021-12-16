import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/dummy.pdf')
const imageBuffer = fs.readFileSync(filePath)

export default function (req, res) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');
    res.send(imageBuffer)
}