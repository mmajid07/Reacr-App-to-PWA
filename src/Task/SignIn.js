import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Grid } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function SignIn() {
    const navigate = useNavigate();

    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            width={"100%"} 
            minHeight={"100vh"} 
            bgcolor={"#f7f1e3"}
          
        >
            <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
                width={{ xs: "100%", sm: "90%", md: "90%" ,lg:"80%"
                 }} 
                bgcolor={"#fff"}
                style={{
                    borderRadius:"20px"
                }}
            >
                <Grid container>
                    
                    <Grid item xs={12} md={12}>
                        <Box 
                        boxShadow={10}
                        borderRadius={'20px'}
                            bgcolor={"#3498db"} 
                            height={{ xs: "auto", md: "600px" }} 
                            display={"flex"} 
                            justifyContent={"center"} 
                            alignItems={"center"} 
                            flexDirection={"column"} 
                            padding={"20px"}
                        >
                            <h1 style={{ 
                                textAlign: "start", 
                                fontSize: "28px", 
                                color: "white", 
                                 
                                maxWidth: "500px" 
                            }}>
                                Hello! Welcome to Our Platform
                            </h1>
                            <p style={{ 
                                textAlign: "start", 
                                fontSize: "14px", 
                                color: "white",
                                maxWidth: "500px" 
                            }}>
                                Explore our services for enhanced healthcare solutions <br/>
                                &copy; {new Date().getFullYear()} Our Company. All Rights Reserved.
                            </p>

                            <Button 
                                onClick={() => navigate("/")} 
                                style={{ 
                                    marginTop:"30px",
                                    backgroundColor: 'white', 
                                    width: '100%', 
                                    maxWidth: '320px', 
                                    borderRadius: '20px', 
                                    marginBottom: "20px", 
                                    color: "#3498db" 
                                }}
                            >
                                Back
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SignIn;
