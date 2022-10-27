import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()

  const onUsernameHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const onAgeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid Error",
        message: "Please enter a valid name and age (of year)"
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (> 0)"
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const errorHandler = () => {
    setError(null)
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type="text" value={enteredUsername} onChange={onUsernameHandler} />
          <label htmlFor='age'>Age (Year)</label>
          <input id='age' type="number" value={enteredAge} onChange={onAgeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser