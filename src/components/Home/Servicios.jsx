import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import MemoryIcon from '@mui/icons-material/Memory';
import DevicesIcon from '@mui/icons-material/Devices';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';


const Servicios = () => {

  return (
    <>
        <Box id="servicios"  bgcolor="primary.dark" sx={{padding:"1rem"}}>
            <Box>
                <Typography variant="h4" align="center" color="white.main" sx={{padding:"1rem"}}  >
                    NUESTROS SERVICIOS
                </Typography>
            </Box>
            <Box display="grid" sx={{margin:"1rem", display:"flex", justifyContent:"center"}}>
                <Grid container spacing={2} maxWidth={'md'} >
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <CodeIcon color="white" sx={{fontSize:"3rem"}}/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Desarrollo a medida
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <WebIcon color="white" sx={{fontSize:"3rem"}}  />
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Desarrollo web y mobile
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <ScreenSearchDesktopIcon color="white" sx={{fontSize:"3rem"}} />
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Product discovery
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <MemoryIcon color="white" sx={{fontSize:"3rem"}} />
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Inteligencia artificial
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SecurityIcon  color="white" sx={{fontSize:"3rem"}}/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Ciberseguridad
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SettingsIcon color="white" sx={{fontSize:"3rem"}}/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Desarrollo ágil
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <DevicesIcon color="white" sx={{fontSize:"3rem"}} />
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Empoderameniento digital
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box display="flex" justifyContent="center" flexDirection="row" alignItems="center">
                            <Box>
                                <SupportAgentIcon color="white" sx={{fontSize:"3rem"}}/>
                            </Box>
                            <Box>
                                <Typography variant="h6" color="white.main">
                                    Soporte constante
                                </Typography>
                            </Box>
                        
                        </Box>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    </>
  );
}

export default Servicios;