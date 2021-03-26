const randomstring = require('randomstring')

export function generateRandomString(length) {
    const random = randomstring.generate({length: length})
    return random
}

export function generateRandomEmail() {
    const random = randomstring.generate({length: 10, capitalization: 'lowercase'})
    return `robot+${random}@example.com`
}