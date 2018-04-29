import * as React from 'react'

import { shallow } from 'enzyme'

import Content from './'

describe('Content component', () => {
  it('Should return a empty div with the good class', () => {
    const wrapper = shallow(<Content />)
    expect(wrapper.find('div').hasClass('content')).toBeTruthy()
  })
  it('Should return a empty section with a the good class', () => {
    const wrapper = shallow(<Content tag="section" />)
    expect(wrapper.find('section').hasClass('content')).toBeTruthy()
  })
  it('Should return a react component with the good class', () => {
    const fakeCmp = (props: any) => <header {...props} />
    const wrapper = shallow(<Content tag={fakeCmp} />)
    expect(wrapper.hasClass('content')).toBeTruthy()
  })
  it('Should return a empty div with all the good class', () => {
    const wrapper = shallow(<Content className="fake-class" />)
    expect(wrapper.find('div').hasClass('fake-class')).toBeTruthy()
  })
  it('Should pass a prop to the div element', () => {
    const wrapper = shallow(<Content id="hello" />)
    expect(wrapper.find('div').filterWhere((item) => item.prop('id') === 'hello')).toHaveLength(1)
  })
  it('Should render children like normal', () => {
    const wrapper = shallow(
      <Content>
        <div id="test">Test</div>
      </Content>
    )
    expect(wrapper.find('#test').text()).toBe('Test')
  })
})
