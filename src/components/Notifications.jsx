import React , {useContext} from "react";
import { Button } from "@mui/material";

import { SocketContext } from "../SocketContext";

const Notifications = () => {
    const {answerCall, call, callAccepted} = useContext(SocketContext);

    return ( 
        <>
            {
                call.isReceivedCall && !callAccepted &&(
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <h1>{call.name} is Calling...</h1>
                        <Button variant="contained" color="primary" onClick={answerCall}>
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
     );
}
 
export default Notifications;