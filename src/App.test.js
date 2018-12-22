import nightmare from 'nightmare'
import { expect } from 'chai'

describe('When visiting the homepage', () => {
  test('shows the title', async ()  => {
    let page = nightmare().goto('http://localhost:3000')

    let text = await page
      .evaluate(() => document.body.textContent)
      .end()

    expect(text).to.include('niclan')
  })
})
