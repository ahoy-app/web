import React from 'react'
import { shallow } from 'enzyme'

import RoomBubble from './RoomBubble'

const room = 'mclarens'

describe('RoomBubble', () => {
  it('should render correctly', () => {
    const component = shallow(<RoomBubble room={room} />)
    expect(component).toMatchSnapshot()
  })
})
