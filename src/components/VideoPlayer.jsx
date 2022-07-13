import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Paper } from '@mui/material';
import { SocketContext } from '../SocketContext';


const StyledGrid = styled(Grid)(({ theme }) => ({

    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
    },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
    
}));


const StyledVideo = styled('video')(({ theme }) => ({
    width: '550px',
    [theme.breakpoints.down('xs')]: {
        width: '300px',
    },
}))



export default function VideoPlayer() {


    const { myVideo, userVideo, name, callAccepted, call, callEnded, stream } = useContext(SocketContext);

    return (
        <StyledGrid container>
            {/* our video */}
            {
                stream && (
                    <StyledPaper>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom> {name || 'Name'} </Typography>
                            <StyledVideo playsInline muted ref={myVideo} autoPlay className></StyledVideo>
                        </Grid>
                    </StyledPaper>
                )
            }

            {/* user video  */}
            {
                callAccepted && !callEnded && (
                    <StyledPaper>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom> {call.name || 'userName'} </Typography>
                            <StyledVideo playsInline ref={userVideo} autoPlay className></StyledVideo>
                        </Grid>
                    </StyledPaper>
                )
            }
 
        </StyledGrid>
    );
}
