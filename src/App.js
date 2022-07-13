import React from "react";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";


import { AppBar,Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar,{
    name: "StyledAppBar",
    slot: "wrapper"
})
`
    width: 60%;
    margin: auto;
    color: black;
    background: cyan;

` 
;



const App = () => {
    return ( 
        <div>

          <StyledAppBar position="static" >
            <Typography variant="h2" align="center"> Video Chat </Typography>
          </StyledAppBar>

            <VideoPlayer />

            <Options>
                <Notifications />
            </Options>

        </div>
     );
}
 
export default App;