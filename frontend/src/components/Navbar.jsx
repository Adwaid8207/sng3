import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='error' >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentsApp
          </Typography>
          <Button color="success">
            <Link to={'/view'} style={{ color:"azure",textDecoration:"none"}}>View</Link>
          </Button>
          

          <Button color="inherit">
            <Link to={'/add'} style={{ color:"azure",textDecoration:"none"}}>Add</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
