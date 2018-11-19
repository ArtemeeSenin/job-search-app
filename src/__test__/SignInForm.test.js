import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import SignInForm from '../components/containers/SignInForm'
import { isReactNative } from '@firebase/util';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from '../reducers';
Enzyme.configure({ adapter: new Adapter() })

describe('SignInForm shallow render', () => {
    const mockStore = configureStore();
    let store, container, wrapper;
    const initialState = {
        registeredFields: {
            login: {
                name: 'login',
                type: 'Field',
                count: 1
            },
            password: {
                name: 'password',
                type: 'Field',
                count: 1
            }
        },
        syncErrors: {
            login: 'Not a valid email',
            password: 'Value is required'
        },
        fields: {
            login: {
                visited: true,
                touched: true
            }
        },
        values: {
            login: 'login'
        },
        anyTouched: true
    }
    const login = (e) => {
        console.log(e)
    }

    beforeEach( () => {
        store = mockStore(initialState);
        container = shallow(<SignInForm onSubmit={login} store={store} />)
        wrapper = mount(<Provider store={store}><Router><SignInForm onSubmit={login} /></Router></Provider>)
    })
    it('renders component', () => {
        expect(container.length).toEqual(1);
    });

    it('mathes initial state', () => {
        expect(container.prop('form')).toEqual('signin');
    })
    it('mounts', () => {
        expect(wrapper.length).toEqual(1);
    })
    it('has input', () => {
        expect(wrapper.find('input[name="login"]').prop('value')).toEqual('');
    })
})



test('invalid email', () => {
  let state;
  state = reducers({user:{},vacancies:[],visibilityFilter:{text:'',status:[]},form:{signin:{registeredFields:{login:{name:'login',type:'Field',count:1},password:{name:'password',type:'Field',count:1}},syncErrors:{login:'Not a valid email',password:'Value is required'},fields:{login:{visited:true,touched:true,active:true}},values:{login:'login'},anyTouched:true,active:'login'}},loading:{}}, {type:'@@redux-form/BLUR',meta:{form:'signin',field:'login',touch:true},payload:'login'});
  expect(state).toEqual({user:{},vacancies:[],visibilityFilter:{text:'',status:[]},form:{signin:{registeredFields:{login:{name:'login',type:'Field',count:1},password:{name:'password',type:'Field',count:1}},syncErrors:{login:'Not a valid email',password:'Value is required'},fields:{login:{visited:true,touched:true}},values:{login:'login'},anyTouched:true}},loading:{}});
});

test('valid email', () => {
    let state;
    state = reducers({ user: {}, vacancies: [], visibilityFilter: { text: '', status: [] }, form: { signin: { registeredFields: { login: { name: 'login', type: 'Field', count: 1 }, password: { name: 'password', type: 'Field', count: 1 } }, syncErrors: { password: 'Value is required' }, fields: { login: { visited: true, touched: true, active: true } }, values: { login: 'artem@emial.com' }, anyTouched: true, active: 'login' } }, loading: {} }, { type: '@@redux-form/BLUR', meta: { form: 'signin', field: 'login', touch: true }, payload: 'artem@emial.com' });
    expect(state).toEqual({ user: {}, vacancies: [], visibilityFilter: { text: '', status: [] }, form: { signin: { registeredFields: { login: { name: 'login', type: 'Field', count: 1 }, password: { name: 'password', type: 'Field', count: 1 } }, syncErrors: { password: 'Value is required' }, fields: { login: { visited: true, touched: true } }, values: { login: 'artem@emial.com' }, anyTouched: true } }, loading: {} });
});

