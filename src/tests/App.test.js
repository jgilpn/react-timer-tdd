// import { render, screen } from '@testing-library/react';
import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Timer from '../components/Timer'

describe('App', () => {
  let container

  beforeEach(() => (container = shallow(<App />)))

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1)
  })

  it('should render the Timer component', () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})
