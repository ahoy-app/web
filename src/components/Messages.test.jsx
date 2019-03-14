import React from 'react'
import { mount } from 'enzyme'

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
  beforeAll(() => {
    if (!HTMLElement.prototype.scrollIntoView) {
      HTMLElement.prototype.scrollIntoView = jest.fn()
    }
  })

  it('should render correctly', () => {
    const component = mount(
      <Messages messages={messages} fetchOldMessages={() => {}} />
    )
    expect(component).toMatchSnapshot()
  })

  it('should call fetchOldMessages when scrolled up', () => {
    const fetchFn = jest.fn()

    const component = mount(
      <Messages messages={messages} fetchOldMessages={fetchFn} />
    )

    component.simulate('scroll')

    expect(fetchFn).toHaveBeenCalled()
  })
})
