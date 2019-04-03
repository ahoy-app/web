import React from 'react'
import { shallow } from 'enzyme'

import __NaMe__ from './__NaMe__'

describe('__NaMe__', () => {
  it('should render correctly', () => {
    const component = shallow(<__NaMe__ />)
    expect(component).toMatchSnapshot()
  })
})
