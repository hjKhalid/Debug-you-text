import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {
    const [text,setText]=React.useState("")
    const onChangeEvent=(event)=>{
       
            setText(event.target.value)
       
    }

  return (
   <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" onChange={onChangeEvent}  label="Add Comment" variant="outlined" />
      
    </Box>
 <Button variant="contained" disableElevation className="contaoner my-2">
       Add comment
   </Button>
   </>
  );
}