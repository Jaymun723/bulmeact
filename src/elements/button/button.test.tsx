import * as React from 'react'

import { shallow } from 'enzyme'

import Button from './'

describe('Button component', () => {
  it('Should return a empty button with the good class', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.find('button').hasClass('button')).toBeTruthy()
  })
  it('Should return a empty anchor with a the good class', () => {
    const wrapper = shallow(<Button tag="a" />)
    expect(wrapper.find('a').hasClass('button')).toBeTruthy()
  })
  it('Should return a react component with the good class', () => {
    const fakeCmp = (props: any) => <input {...props} />
    const wrapper = shallow(<Button tag={fakeCmp} />)
    expect(wrapper.hasClass('button')).toBeTruthy()
  })
  it('Should return a empty button with all the good class', () => {
    const wrapper = shallow(<Button className="fake-class" />)
    expect(wrapper.find('button').hasClass('fake-class')).toBeTruthy()
  })
  it('Should pass a prop to the button element', () => {
    const wrapper = shallow(<Button id="hello" />)
    expect(wrapper.find('button').filterWhere((item) => item.prop('id') === 'hello')).toHaveLength(1)
  })
  it('Should render children like normal', () => {
    const wrapper = shallow(<Button id="test">Test</Button>)
    expect(wrapper.find('#test').text()).toBe('Test')
  })
})
