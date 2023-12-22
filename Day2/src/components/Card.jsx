import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MyCard = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mt: 1.5 }} color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
