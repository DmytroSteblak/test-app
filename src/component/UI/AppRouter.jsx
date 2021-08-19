import React, {useContext} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PrivateRouters, PublicRoutes } from '../../router';
import { AuthContext } from '../../context';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth ?
        <Switch>
            {PrivateRouters.map((route, id) =>
                <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    key={id}
                />
            )}
            <Redirect to="/posts"/>
        </Switch>
            : <Switch>
                {PublicRoutes.map((route, id) =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={id}
                    />
                )};
                <Redirect to="/login"/>
            </Switch>
    );
};

export default AppRouter;
