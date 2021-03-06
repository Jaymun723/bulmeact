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
    const wrapper = shallow(<Box className="fake-class" />)
    expect(wrapper.find('div').hasClass('fake-class')).toBeTruthy()
  })
  it('Should pass a prop to the div element', () => {
    const wrapper = shallow(<Box id="hello" />)
    expect(wrapper.find('div').filterWhere((item) => item.prop('id') === 'hello')).toHaveLength(1)
  })
  it('Should render children like normal', () => {
    const wrapper = shallow(
      <Box>
        <div id="test">Test</div>
      </Box>
    )
    expect(wrapper.find('#test').text()).toBe('Test')
  })
})
