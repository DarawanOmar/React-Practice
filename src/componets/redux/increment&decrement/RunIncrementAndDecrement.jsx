import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Counter from './features/Counter'

const RunIncrementAndDecrement = () => {
  return (
    <div>
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  )
}

export default RunIncrementAndDecrement