import React, { useContext, useState } from "react";
import { styled } from "@mui/system";
import { Typography, Grid, Paper, Button, TextField, Container } from '@mui/material';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, PhoneEnabled, PhoneDisabled } from '@mui/icons-material';
import { SocketContext } from "../SocketContext";




const StyledGridContainer = styled(Grid)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    },
}));

const StyledContainer = styled(Container)(({theme})=>({
    
    width: '650px',
    margin: 'auto',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
        width: '80%',
    },
    
}));



export default function Options({ children }) {

    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');


    return (
        
        <StyledContainer>
            <Paper elevation={10} className="Options_paper">
                <form className="Options_root" noValidate autoComplete="off">
                    <StyledGridContainer container  >
                        <Grid item xs={12} md={6} className="Options_padding">
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField variant="standard" label="Name" value={name} onChange={(e)=>setName(e.target.value)} fullWidth></TextField>
                            <br/> <br/>
                            <CopyToClipboard text={me} className="Options_margin">
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large"/>}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        
                        </Grid>

                        <Grid item xs={12} md={6} className="Options_padding">
                            <Typography gutterBottom variant="h6">Make a Call</Typography>
                            <TextField variant="standard" label="ID to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} fullWidth></TextField>
                            <br/> <br/>
                            
                            {
                                callAccepted && !callEnded ? (
                                    <Button 
                                        variant='contained' 
                                        color="secondary" 
                                        startIcon={<PhoneDisabled fontSize="large" />}
                                        fullWidth
                                        onClick={leaveCall}
                                        className="Options_margin"
                                        >Hang Up</Button>
                                ):(
                                    <Button
                                        variant='contained' 
                                        color="primary" 
                                        startIcon={<PhoneEnabled fontSize="large" />} 
                                        fullWidth
                                        onClick={()=>callUser(idToCall)}
                                        className="Options_margin"
                                    >Call</Button>
                                )
                            }
                            
                        </Grid>
                    </StyledGridContainer>
                </form>
                {children}
            </Paper>
        </StyledContainer>
    );
}






