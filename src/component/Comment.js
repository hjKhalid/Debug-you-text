import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Card from './Card'


export default function BasicTextFields(props) {
  const [text, setText] = React.useState("");
  const [comment,setComment]=React.useState("");



  const onChangeEvent = (event) => {

    setText(event.target.value)

  }

  console.log(text);
  

  const handleOnClick = () => {
    axios({
      method: "post",
      url: "http://locahost3004/api/auth",
      data: { text },
      headers: { "Content-Type": "application/JSON" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
      setComment(text);
     text="";
    
  }
   console.log(comment)

  return (
    <>
      
        <Box

          
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" onChange={onChangeEvent} label="Add Comment" variant="outlined" />

        </Box>

        <Button variant="contained" disableElevation onClick={handleOnClick} className="contaoner my-2">
          Add comment
        </Button>
      
      <h3> Peoples Comment</h3>
      {/* {comment?comment.map((e,i)=>{
        return (
          <Card key={i} comment={e?e:""}/>
        )

       }):} */}
      <Card comment={comment}/>   
 
    </>
  );
}