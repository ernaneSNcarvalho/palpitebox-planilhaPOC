/*Create a small commit*/

const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1ieTUEtcdPPVF0-vgiD7eV-7jeRcBVtiqCkLBjMsHUTo')

const run = async() => {
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
}

run()