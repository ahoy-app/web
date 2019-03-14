import React from 'react'
import { shallow } from 'enzyme'

import Room from './Room'

describe('Room', () => {
  it('should render correctly', () => {
    const component = shallow(<Room />)
    expect(component).toMatchSnapshot()
  })
})
