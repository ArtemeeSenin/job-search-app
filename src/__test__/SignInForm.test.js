import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme'
import SignInForm from '../components/containers/SignInForm'

Enzyme.configure({ adapter: new Adapter() })

describe('SignInForm shallow render', () => {
    let wrapper;
    const login = (e) => {
        console.log(e)
    }

    beforeEach( () => {
        wrapper = shallow(<SignInForm onSubmit={ login }/>)
    })

    it('renders component', () => {
        expect(wrapper.length).toEqual(1)
    })
})