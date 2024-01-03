const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const CSS_ROOT = 'src/styles'

const file = readFileSync(path.join(__dirname, CSS_ROOT, 'global.css'), {
	encoding: 'utf-8',
})

const fixed = file.replaceAll(
	/(.*--.+:)[ ]*(.+[ ]+.+%[ ]+.+%);/g,
	'$1 hsl($2);',
)

writeFileSync(path.join(__dirname, CSS_ROOT, 'global-edit.css'), fixed)
