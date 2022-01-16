import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    // const { user } = useSelector(({ userLogin }) => userLogin);
    const [previousRoute, setPreviousRoute] = useState(null);
    const { pathname } = useLocation();
    const authenticated = false;

    useEffect(() => {
        if (previousRoute !== null) setPreviousRoute(pathname);
    }, [pathname, previousRoute]);

    if (authenticated) {
        return <>{children}</>;
    } else {
        return (
            <Navigate
                to={{
                    pathname: '/session/login',
                    state: { redirectUrl: previousRoute }
                }}
            />
        );
    }
};
export default AuthGuard;