import * as React from 'react'

import { shallow } from 'enzyme'

import Box from './'

describe('Box component', () => {
  it('Should return a empty div with a the good class', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper.find('div').hasClass('box')).toBeTruthy()
  })
  it('Should return a empty section with a the good class', () => {
    const wrapper = shallow(<Box tag="section" />)
    expect(wrapper.find('section').hasClass('box')).toBeTruthy()
  })
  it('Should return a react component with the good class', () => {
    const fakeCmp = (props: any) => <header {...props} />
    const wrapper = shallow(<Box tag={fakeCmp} />)
    expect(wrapper.hasClass('box')).toBeTruthy()
  })
  it('Should return a empty div with all the good class', () => {
    const wrapper = shallow(<Box className="is-black" />)
    expect(wrapper.find('div').hasClass('is-black')).toBeTruthy()
  })
})
