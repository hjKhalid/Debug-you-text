import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {

  return (
    <>
      <Card sx={{ minWidth: 275 }} className="my-3">
        <CardContent>

          <Typography variant="body2">
           Comment: {props.comment} 
            
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}