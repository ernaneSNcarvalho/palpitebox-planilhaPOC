const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1ieTUEtcdPPVF0-vgiD7eV-7jeRcBVtiqCkLBjMsHUTo')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    console.log(sheet.title)
    const cell = sheet.getCell(1, 0)
    console.log(cell.value)

}

run()