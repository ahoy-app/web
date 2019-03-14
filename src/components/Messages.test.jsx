import React from 'react'
import { shallow } from 'enzyme'

import Messages from './Messages'

const messages = [
  {
    id: '12we4tq34t9guw1344tt',
    from: 'Barney',
    content: "It's gona be legend.. Whait for it!",
  },
  {
    id: 'q384tp1349fgh139p48g',
    from: '-',
    content: 'See you later',
  },
  {
    id: '823498t1394gt13t1448',
    from: 'Barney',
    content: '..dary! Legendary, Ted!',
  },
]

describe('Messages', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Messages messages={messages} fetchOld={() => {}} />
    )
    expect(component).toMatchSnapshot()
  })
})
