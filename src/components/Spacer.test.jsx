import React from 'react'
import { shallow } from 'enzyme'

import Spacer from './Spacer'

describe('Spacer', () => {
  it('should render correctly', () => {
    const component = shallow(<Spacer />)
    expect(component).toMatchSnapshot()
  })
})
