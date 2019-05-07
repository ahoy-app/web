import React from 'react'
import { shallow } from 'enzyme'

import RoomBubble from './RoomBubble'

const room = { id: 'mclarens', name: 'mclareuns' }

describe('RoomBubble', () => {
  it('should render correctly', () => {
    const component = shallow(<RoomBubble room={room} />)
    expect(component).toMatchSnapshot()
  })
})
