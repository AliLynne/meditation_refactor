import React from 'react'
import { shallow } from 'enzyme'

import Timer from './Timer'

describe('Timer', () => {
  it('should render correctly', () => {
    const timer = shallow(<Timer />)

    expect(timer.debug()).toMatchSnapshot()
  })
})
