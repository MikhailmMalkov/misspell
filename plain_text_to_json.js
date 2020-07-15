var fs = require('fs')
var toJSON = require('plain-text-data-to-json')

var doc = fs.readFileSync('missp.txt', 'utf8')

var data = toJSON(doc)

fs.writeFileSync('missp.json', JSON.stringify(data, null, 2) + '\n')
