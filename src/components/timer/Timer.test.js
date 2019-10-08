import React from 'react'
import { shallow } from 'enzyme'

import Timer from './Timer'

describe('Timer', () => {
  const mockSave = jest.fn()
  const timer = shallow(<Timer />)

  it('should render correctly', () => {


    expect(timer.debug()).toMatchSnapshot()
  })

  describe('when clicking `Save` button', () => {
    beforeEach(() => {
      timer.find('.button-save').simulate('click')
    })
  })


})
