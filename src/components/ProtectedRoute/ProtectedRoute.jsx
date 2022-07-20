import React from 'react';
import {Route, Navigate, Routes} from "react-router-dom";

function ProtectedRoute ({isLoggedIn, children}){
    return isLoggedIn? children : <Navigate to="/signin"/>
}

export default ProtectedRoute;