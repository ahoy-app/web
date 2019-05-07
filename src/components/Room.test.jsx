import React from 'react'
import { shallow } from 'enzyme'
import * as MockMessages from '../mocks/messages'
import Room from './Room'

describe('Room', () => {
  MockMessages.receiveNewMessages = () => [
    {
      id: '1',
      from: 'a',
      content: 'aaa',
    },
    {
      id: '2',
      from: 'b',
      content: 'bbb',
    },
  ]
  it('should render correctly', () => {
    const component = shallow(<Room />) // eslint-disable-line react/no-children-prop
    expect(component).toMatchSnapshot()
  })
})
