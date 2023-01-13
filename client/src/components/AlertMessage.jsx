import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const AlertMassage = ({ message }) => {
  const [open, setOpen] = React.useState(true)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        variant='warning'
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={message}
        action={[
          <IconButton key='close' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  )
}

export default AlertMassage
