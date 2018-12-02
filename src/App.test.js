import nightmare from 'nightmare'
import { expect } from 'chai'

describe('When visiting the homepage', function () {
  test('it welcomes the user', async function () {
    nightmare()
      .goto('http://localhost:3000')
      .then(text => {
        expect(text).toContain('Edit src/App.js and save to reload.')
      })
  })
})
