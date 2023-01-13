import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const pages = [
  { text: 'Home', link: '/' },
  { text: 'New message', link: '/new-message' },
  { text: 'Logs', link: '/logs' }
]

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                component={Link}
                to={page.link}
                sx={{ my: 2, color: 'white' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
