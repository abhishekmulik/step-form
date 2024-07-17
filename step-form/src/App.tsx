import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import FormWrapper from './components/forms/formWrapper/FormWrapper'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  const defaultValue = [
    { id: '01', name: 'Personal Info', href: '#', status: 'current' },
    { id: '02', name: 'Education', href: '#', status: 'upcoming' },
    { id: '03', name: 'Work Experience', href: '#', status: 'upcoming' },
    { id: '04', name: 'Skills and Qualifications', href: '#', status: 'upcoming' },
    { id: '05', name: 'Additional Information', href: '#', status: 'upcoming' },
    { id: '06', name: 'Review and Submit', href: '#', status: 'upcoming' },
  ]



  return (
    <Provider store={store}>
      <Header />
      <FormWrapper />
    </Provider>
  )
}

export default App
