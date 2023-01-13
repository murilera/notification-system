import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import AlertMassage from './AlertMessage'
import { api } from '../lib/api'

const categories = [
  {
    value: 'Sports',
    label: 'Sports'
  },
  {
    value: 'Finance',
    label: 'Finance'
  },
  {
    value: 'Movies',
    label: 'Movies'
  }
]

const AddMessageForm = () => {
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('Sports')
  const [status, setStatusBase] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].value == '') {
      setStatusBase({ msg: 'Message cannot be empty', key: Math.random() })
    } else {
      api
        .post('/messages/add', {
          message,
          category
        })
        .then(function (response) {
          setStatusBase({ msg: 'Message sent!', key: Math.random() })
          console.log(response)
        })
        .catch(function (response) {
          setStatusBase({
            msg: 'Something is wrong with the api!',
            key: Math.random()
          })
          console.log(response)
        })
      setMessage('')
    }
  }

  return (
    <>
      <Box
        component='form'
        display='flex'
        justifyContent='center'
        alignItems='center'
        autoComplete='off'
        flexDirection='column'
        padding='20px'
        onSubmit={handleSubmit}
      >
        <TextField
          label='Message'
          variant='outlined'
          value={message}
          style={{ minWidth: '25%' }}
          onChange={(event) => setMessage(event.target.value)}
        />
        <TextField
          select
          defaultValue='Sports'
          value={category}
          style={{ minWidth: '25%', padding: '10px' }}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant='contained' color='primary' type='submit'>
          Send
        </Button>
      </Box>
      {status ? <AlertMassage key={status.key} message={status.msg} /> : null}
    </>
  )
}

export default AddMessageForm
