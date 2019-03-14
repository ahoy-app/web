import React from 'react'
import { shallow } from 'enzyme'

import RoomSelector from './RoomSelector'

const rooms = ['mclarens', 'GNB']

describe('RoomSelector', () => {
  it('should render correctly', () => {
    const component = shallow(<RoomSelector rooms={rooms} />)
    expect(component).toMatchSnapshot()
  })
})
