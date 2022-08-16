import React, { Fragment } from 'react';
import { Navigate, RouteProps, Outlet, useNavigate } from 'react-router-dom';

import useAuth from './../../hooks/useAuth';
import Button from '../Button/index';

interface PrivateRouteProps extends RouteProps { }

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }:PrivateRouteProps) => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = (event:any) => {
        event.preventDefault();
        auth.dispatch({type: "LOGOUT"});

        navigate("/login", {replace: true});
    }

    if (!auth.state.isAuthenticated) {
        return <Navigate to="/login" replace={true} />
    }

    return (
        <Fragment>
            <Button type="button" handleClick={handleLogout} fixed={true}>Sair</Button>
            <Outlet />
        </Fragment>
    )
}

export default PrivateRoute;