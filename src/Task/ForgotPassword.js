import React from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            height="80vh" 
            bgcolor="#f0f4f7"
            padding={2} // Adding some padding for small screens
        >
            <Box 
                borderRadius={"20px"} 
                boxShadow={4} 
                padding={"20px"} // Reduced padding
                width={"100%"} // Make width responsive
                maxWidth={"500px"} // Max width for larger screens
                bgcolor="#fff"
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Forgot Password
                </Typography>
                <TextField
                    label="Email"
                    placeholder="Enter your email"
                    fullWidth
                    variant="outlined"
                    style={{ marginBottom: "20px" }}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    style={{ marginBottom: "20px" }}
                >
                    Send Reset Link
                </Button>
                <Button 
                    onClick={() => navigate("/")} 
                    variant="outlined" 
                    color="secondary" 
                    fullWidth 
                    style={{ marginBottom: "20px" }} // Reduced margin to keep everything on one page
                >
                    Back
                </Button>
                <Box textAlign="center">
                    <Link href="#" underline="none" style={{ color: "#0073e6" }}>
                        Terms of Service
                    </Link>{" "}
                    |{" "}
                    <Link href="#" underline="none" style={{ color: "#0073e6" }}>
                        Privacy Policy
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default ForgotPassword;
