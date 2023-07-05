import React from 'react'
import RunMobileShopping from './RunMobileShopping'
import { store } from './store'
import { Provider } from 'react-redux'
const RunMainMobileShopping = () => {
  return (
    <div>
        <Provider store={store}>

        <RunMobileShopping />
        </Provider>
    </div>
  )
}

export default RunMainMobileShopping