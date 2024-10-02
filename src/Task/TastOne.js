import React from "react";
import { Grid, Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function TaskOne() {
    const navigate = useNavigate();
    
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={"100%"}
            minHeight={"100vh"}
        >
            <Box  width={{ xs: "100%", sm: "100%", md: "90%", lg: "80%" }}>
                <Grid container>
                    {/* Left Column */}
                    <Grid item xs={12} md={4}>
                        <Box
                             
                            boxShadow={3}
                            display={"flex"}
                            justifyContent={"space-evenly"}
                            alignItems={"center"}
                            flexDirection={"column"}
                            bgcolor={"#ffffff"}
                            height={{ xs: "auto", md: "600px" }}
                            padding={{ xs: "20px", md: "0" }}
                            textAlign="center"
                            style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px',}}
                        >
                            <img src="logo.png" height={"40px"} width={"150px"} alt="Logo" style={{ marginBottom: "30px",marginTop: "30px" }} />
                            
                            <TextField
                                error
                                label="Email"
                                placeholder="Enter your email"
                                helperText="You must enter an email"
                                fullWidth
                                style={{ marginBottom: "10px", maxWidth: "300px" }}
                            />
                            <TextField
                                error
                                label="Password*"
                                placeholder="Enter your password"
                                helperText="Please enter a password"
                                fullWidth
                                style={{ marginBottom: "30px", maxWidth: "300px" }}
                            />
                            
                            <Button
                                onClick={() => navigate('/signIn')}
                                fullWidth
                                style={{
                                    backgroundColor: '#e0e0e0',
                                    maxWidth: '300px',
                                    borderRadius: '30px',
                                    marginBottom: "30px",
                                    color:'black',
                                }}
                            >
                                Login
                            </Button>

                            <Button
                                component={Link}
                                to="/forgotPassword"
                                fullWidth
                                style={{
                                    textTransform: "initial",
                                    color: "#62d5ee",
                                    maxWidth: '300px'
                                }}
                            >
                                Forgot your password?
                            </Button>

                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bgcolor="#e8f4fd"
                                padding="10px"
                                borderRadius="10px"
                                width={{ xs: "100%", md: "80%" }}
                                marginTop="20px"
                            >
                                <InfoOutlinedIcon style={{ color: "#7fc3f8", marginRight: "10px" }} />
                                <p style={{ fontSize: "13px", margin: 0 }}>If you encounter any issues, please contact the administrator</p>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={8}>
                        <Box
                            bgcolor={"#01619b"}
                            height={{ xs: "auto", md: "600px" }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            padding={{ xs: "20px", md: "0" }}
                            style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px',}}
                        >
                            <h1 style={{
                                fontSize: "35px",
                                color: "white",
                                textAlign: "center",
                                marginBottom: "20px",
                                  
                            }}>
                                Welcome to <br /> MEDIREMOTE
                            </h1>
                            <p style={{
                                fontSize: "14px",
                                color: "white",
                                textAlign: "center",
                                maxWidth: "400px"
                            }}>
                                A Brand of E-Healthcare Systems and Wireless Communications. Current and Future Challenges.<br />
                                &copy; {new Date().getFullYear()} MEDIREMOTE. All Rights Reserved.
                            </p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default TaskOne;
