//npm i expect mocha --save-dev
let expect = require('expect')

let {generateMessage, generateLocationMessage} = require('./message')

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        const from = "Doug",
            text = "Some random text",
            message = generateMessage(from, text)

        expect(typeof message.createdAt).toBe('number')
        expect(message).toMatchObject({from, text})
    })
})

describe('Generate Location Message', () => {
    it('should generate correct location object', () => {
        const from = "Willian",
            lat = 15,
            lng = 56,
            url = `https://www.google.com/maps?q=${lat}, ${lng}`,
            message = generateLocationMessage(from, lat, lng)

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url})
    })
})