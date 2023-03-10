import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




export default function MultilineTextFields() {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value)
        // console.log(text);

    }
    const changeToUp = () => {
        let text2 = text.toUpperCase();
        setText(text2);
    }
    const changeToLower = () => {
        let text1 = text.toLowerCase();
        setText(text1);

    }
    const clear = () => {
        let text1 =" ";
        setText(text1);

    }
    let myStyle={
        fontSize:'17'
    }
    const changeToitailic = () =>{
      let text4=text.myStyle;
      setText(text4);
    }

    

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <TextField
                    id="outlined-multiline-static"
                    label="Enter your Text"
                    onChange={handleOnChange}
                    multiline
                    rows={8}
                    value={text}
                    style={myStyle}
                />

            </div>
            <div className='container my-1' id='btn'>
                <Button variant="contained" disableElevation onClick={changeToLower} className="contaoner mx-1">
                    To lower case
                </Button>

                <Button variant="contained" disableElevation onClick={changeToUp} className="contaoner mx-1">
                    To upper case
                </Button>
                <Button variant="contained" disableElevation onClick={clear} className="contaoner mx-1">
                    clear
                </Button>
                <Button variant="contained" disableElevation onClick={changeToitailic} className="contaoner mx-1">
                    itailic
                </Button>
            </div>
            <div className='container'>
                <div className='box'>
                    <h2 className='my-3'>Text Summary</h2>
                </div>

                <p><h6>the word are:  {text.split(" ").length} </h6><br /><h6>the alphabate are:{text.length}</h6>  </p>
                <p><h6>Time requred to read:{(0.08*text.split(" ").length)/60}  minutes</h6></p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            
        </Box>

    );
}