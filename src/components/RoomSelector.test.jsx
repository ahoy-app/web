import React from 'react'
import { mount } from 'enzyme'

import RoomSelector from './RoomSelector'

const rooms = ['mclarens', 'GNB']

let component

describe('RoomSelector', () => {
  afterAll(() => {
    if (component) component.unmount()
  })
  it('should render correctly', () => {
    component = mount(<RoomSelector rooms={rooms} />)
    expect(component).toMatchSnapshot()
  })
})
