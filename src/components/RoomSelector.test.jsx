import React from 'react'
import { shallow } from 'enzyme'

import RoomSelector from './RoomSelector'

const rooms = [{ id: 'mclarens', name: 'mclarens' }, { id: 'GNB', name: 'GNB' }]

let component

describe('RoomSelector', () => {
  afterAll(() => {
    if (component) component.unmount()
  })
  it('should render correctly', () => {
    component = shallow(<RoomSelector rooms={rooms} />)
    expect(component).toMatchSnapshot()
  })
})
