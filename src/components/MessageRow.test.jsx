import React from 'react'
import { shallow } from 'enzyme'

import MessageRow from './MessageRow'

const message = {
  id: 'q384tp1349fgh139p48g',
  from: 'Ted',
  content: 'See you later',
}

describe('MessageRow', () => {
  it('should render correctly', () => {
    const component = shallow(<MessageRow message={message} />)
    expect(component).toMatchSnapshot()
  })
})
