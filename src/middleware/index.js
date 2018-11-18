import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createLogger } from 'redux-logger'

// const logger = createLogger({
//     collapsed: true
// })

export default composeWithDevTools(applyMiddleware(
    thunk,
    // logger
));