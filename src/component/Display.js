import React from 'react'
import Box from '@mui/material/Box';

function Display(props) {
  return (
    <div>
         <Box
        component="div"
        sx={{
          whiteSpace: 'normal',
          my: 2,
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <p >{props.text?<i>{props.text}</i>:""}</p>
       
      </Box>
      <h3>Preview in Bold</h3>
      <Box
        component="div"
        sx={{
          whiteSpace: 'normal',
          my: 2,
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        
        <p >{props.text?<b>{props.text}</b>:""}</p>
       
      </Box>
      <h3>Preview in UnderLine</h3>
      <Box
        component="div"
        sx={{
          whiteSpace: 'normal',
          my: 2,
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <p >{props.text?<u>{props.text}</u>:""}</p>
       
      </Box>
    </div>
  )
}

export default Display