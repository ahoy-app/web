import React from 'react'
import { mount } from 'enzyme'

import Input from './Input'

let component

describe('Input', () => {
  afterAll(() => {
    if (component) component.unmount()
  })
  it('should render correctly', () => {
    component = mount(<Input onChange={() => {}} />)
    expect(component).toMatchSnapshot()
  })
})
