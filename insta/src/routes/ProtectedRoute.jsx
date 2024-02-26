// import React from 'react'
// import { Navigate, useLocation } from "react-router-dom"
// import { Outlet } from 'react-router-dom';
// const ProtectedRoute = ({ children }) => {
//     const user = {
//         state: {
//             isAuthenticated: true
//         },
//         name: "Akash Anand",
//         age: 20,
//         address: "Mohali"
//     }
//     let location = useLocation();

//     if (!user.state.isAuthenticated) {
//         return <Navigate to="/" state={{ from: location }} replace />
//     }
//     return <Outlet/>


// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import GlobalLayouts from '../layouts/GlobalLayouts';

const ProtectedRoute = ({ children }) => {
    console.log("CHild", children)
    const user = {
        state: {
            isAuthenticated: true,
        },
    };

    let location = useLocation();

    if (!user.state.isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return (
        <>
            <GlobalLayouts>
            {children}
            </GlobalLayouts>

        </>
    );
};

export default ProtectedRoute;
