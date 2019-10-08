import React from 'react'
import { shallow } from 'enzyme'

import Data from './Data'

describe('Data component', () => {
  it('should render correctly', () => {
    const data = shallow(<Data />)

    expect(data.debug()).toMatchSnapshot()
  })
})
