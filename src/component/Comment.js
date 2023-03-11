import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function BasicTextFields() {
    const [text,setText]=React.useState("")
    const onChangeEvent=(event)=>{
       
            setText(event.target.value)
       
    }

    const handleOnClick=()=>{axios({
        method: "post",
        url: "http://locahost3004/api/auth",
        data: {text},
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
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
 <Button variant="contained" disableElevation onClick={handleOnClick} className="contaoner my-2">
       Add comment
   </Button>
   </>
  );
}