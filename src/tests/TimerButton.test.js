import React from 'react'
import { shallow } from 'enzyme'
import TimerButton from '../components/TimerButton'

describe('TimerButton', () => {
  let container
  let mockFn

  beforeEach(() => {
    mockFn = jest.fn()
    container = shallow(<TimerButton buttonAction={mockFn} buttonValue={''} />)
  })

  it('should render a <div />', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
  })

  it('should call onclick function when clicked', () => {
    expect(mockFn).toHaveBeenCalledTimes(0)
    container.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
