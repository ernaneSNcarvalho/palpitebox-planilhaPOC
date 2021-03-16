const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1ieTUEtcdPPVF0-vgiD7eV-7jeRcBVtiqCkLBjMsHUTo')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    await sheet.addRow({
        Nome: 'Ernane', 
        Email: 'ernane@ernane.com', 
        Whatsapp: '349999999',
        Cupom: 'a223d6d',
        Promo: 'çflakçdflak'

    })
}

run()