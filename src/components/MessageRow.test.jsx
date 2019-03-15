import React from 'react'
import { mount } from 'enzyme'

import MessageRow from './MessageRow'

const message = {
  id: 'q384tp1349fgh139p48g',
  from: 'Ted',
  content: 'See you later',
}

let component

describe('MessageRow', () => {
  afterAll(() => {
    if (component) component.unmount()
  })

  it('should render correctly', () => {
    component = mount(<MessageRow message={message} />)
    expect(component).toMatchSnapshot()
  })
})
