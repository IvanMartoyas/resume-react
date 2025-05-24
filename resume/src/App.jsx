// import { useState } from 'react'
import './App.scss'
import Main_layout from './layout/Main_layout';
import { Provider } from 'react-redux';


import {store} from './store/store.js'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Main_layout></Main_layout>
      </Provider>
      
    </>
  )
}

export default App
