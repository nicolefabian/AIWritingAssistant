import React from 'react'
import {usePrivy} from "@privy-io/react-auth";
import {Navigate} from "react-router-dom";
import loadingGif from "../images/loading.gif";
const PrivateRoute = ({children}) => {
    const {authenticated, ready} = usePrivy();
    if (!ready) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
          </div>
        );
      }
  
    return authenticated ? children: <Navigate to="/login"/>;
};

export default PrivateRoute
