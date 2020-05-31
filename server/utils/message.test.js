//npm i expect mocha --save-dev
let expect = require('expect');

let {generateMessage} = require('./message');

describe('Generate Message', () => {
    it("should generate correct message object", () => {
        let from = "Doug",
            text = "Some random text",
            message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text})
    })
})