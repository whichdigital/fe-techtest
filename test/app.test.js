import {generateNumbers} from '../src/app';

describe('app', function(){
  const tileContainerEl = document.createElement('div')
  tileContainerEl.id = "numbers-container"
  document.body.appendChild(tileContainerEl)


  it('generates an array of numbers', function(){
    expect(generateNumbers().length).toBe(144)
  })

})