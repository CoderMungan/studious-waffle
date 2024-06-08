const crypto = require('crypto')

const secretKey = "sasikujdfbkasjdbfklsajdbkfasjdfha256"

const hash = crypto
  .createHmac('sha256', secretKey)
  .update("sifremikaydet")
  .digest('hex')
// digest("base64"), digest("hex"), digest("latin1"), digest("base64url"), digest("binary") seklinde de kullanilabilir

console.log("hashlenmis :", hash)
