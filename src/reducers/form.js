import { reducer as formReducer } from 'redux-form'

export default formReducer.plugin({
    vacancy: (state, action) => {
        switch (action.type) {
            case 'FILL_IN_FORM':
                return {
                    ...state,
                    values: {
                        ...state.values,
                        ...action.data
                    }
                }
            default:
                return state;
        }
    }
})