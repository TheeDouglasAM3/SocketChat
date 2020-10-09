const expect = require('expect')

const {isRealString} = require('./isRealString')

describe('is Real String', () => {
  it('should reject non-string values', () => {
    const res = isRealString(65)
    expect(res).toBe(false)
  }) 

  it('should reject string with only spaces', () => {
    const res = isRealString('   ')
    expect(res).toBe(false)
  })

  it('should allow string with non-space chars', () => {
    const res = isRealString('   DGS      ')
    expect(res).toBe(true)
  })
})