import './App.css';
import Form from './Components/Form'
import schema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import React, { useState, useEffect }  from 'react';
import User from './Components/User'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '', 
  role: '',
}

const initialUsers = [];
const initialDisabled = true



function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data)
  })
  .catch(err => console.error(err))

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data.data, ...users])
    })
    .catch(err => console.error(err))

    // setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])




  return (
    <div className="App">
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

    {
      users.map(user => {
        return (
          <User key={user.id} details={user} />
        )
      })
    }

    </div>
  );
}

export default App;
