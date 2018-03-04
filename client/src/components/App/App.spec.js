import React from 'react'
import {mount} from 'enzyme'

import App from './App'

describe('App', () => {
  it('should render', () => {
    const props = {
      user: {
        fullName: 'name',
        token: 'token'
      },
      getUser: () => {},
      logout: () => {},
      push: () => {},
      resetError: () => {}
    }
    const element = mount(<App {...props} />)

    expect(element.html()).toBeDefined()
  })
})
