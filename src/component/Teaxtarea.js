import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Display from './Display';
import BasicStack from './BasicStack';
import Comment from './Comment'







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
        let text1 = " ";
        setText(text1);

    }
    // const textStyle = {
    //     fontStyle: text ? "italic" : "normal",
    //   }



    return (
        <>
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
                    // style={textStyle?textStyle:""}

                    />

                </div>
                <Comment />

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

                </div>
                <div className='container'>
                    <div className='box'>
                        <h2 className='my-3' style={{ color: "wh", fontWeight: "400%", }}>Text Summary</h2>
                    </div>
                    <BasicStack word={text.split(" ").length} alphabet={text.length} read={(0.08 * text.split(" ").length) / 60} />

                    <h3 className='my-3'>Preview in Itailic</h3>
                    <Display text={text} />




                </div>

            </Box>
        </>

    );
}