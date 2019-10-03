const { expect } = require('chai');
const wrap = require('../wrap');

//wrap function test
describe('wrap', () => {
  it('returns a string', () => {
    expect(wrap('', 10)).to.equal('');
    expect(typeof wrap('', 10)).to.equal('string');
  });

  it('equals a wrapped string in the right column num', () => {
    expect(wrap('This is a string', 4)).to.equal('This\n is \na st\nring');
  });
});
