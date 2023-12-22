import React from 'react';
import './assign.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyAppBar from './assign.jsx';
import Footer from './Footer.jsx';
const Contact = () => {
  return (
    <div>
    <MyAppBar />
    <Box className="about-container">
      <Typography variant="h4" className="about-heading">
        CONTACT US
      </Typography>
      <div className="about-content">
      <br/><br/><br/>
      <div className="contact-content">
        <Typography variant="body1">
          Have questions or inquiries? Feel free to reach out to us. Our dedicated support team is here to assist you.
        </Typography>
        <Typography variant="body1">
          For general inquiries, please contact us via email or phone:
        </Typography>
        <Typography variant="body1">
          Email: contact@example.com
        </Typography>
        <Typography variant="body1">
          Phone: 123-456-7890
        </Typography><br></br>
      </div>
      </div>
    </Box>
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
  );
};


export default Contact;
