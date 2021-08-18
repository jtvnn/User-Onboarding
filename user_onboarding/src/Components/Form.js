import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const  { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>Add a User</h2>
    
            {/* 🔥 DISABLE THE BUTTON */}
            <button disabled={disabled}>submit</button>
    
            <div className='errors'>
              {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              <div>{errors.username}</div>
              <div>{errors.email}</div>
              <div>{errors.password}</div>
              <div>{errors.terms}</div>
            </div>
          </div>
    
          <div className='form-group inputs'>
        
    

            <label>Username&nbsp;
              <input
                value={values.username}
                onChange={onChange}
                name='username'
                type='text'
              />
            </label>
    
            <label>Email
              <input
                value={values.email}
                onChange={onChange}
                name='email'
                type='text'
              />
            </label>

            <label>Password
              <input
                value={values.password}
                onChange={onChange}
                name='password'
                type='text'
              />
            </label>
    </div>

          <div className='form-group checkboxes'>
            <h4>Hobbies</h4>
    
            <label>Terms
              <input 
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={onChange}
              />
            </label>
    
          </div>
        </form>
      )
    }