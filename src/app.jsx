import { useState } from 'preact/hooks'
import RegistrationForm from './components/RegistrationForm';
import formikForm from './components/formikForm';


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>User Registration</h1>
        <RegistrationForm />
      </div>
      <div className="App">
        <h1>User Registration</h1>
        <formikForm />
     </div>
    </>
  )
}
