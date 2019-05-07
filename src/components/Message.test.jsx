import React from 'react'
import { shallow } from 'enzyme'

import Message from './Message'

const message = {
  id: 'q384tp1349fgh139p48g',
  from: 'Ted',
  content: 'See you later',
}

describe('Message', () => {
  it('should render correctly', () => {
    const component = shallow(<Message message={message} me={false} />)
    expect(component).toMatchSnapshot()
  })
})
