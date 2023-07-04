import React from 'react'
import Counter from './features/Counter'
import { Provider } from 'react-redux'
import { store } from './store'
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