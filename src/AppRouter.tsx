import * as React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import App from './App';
import NotFoundPage from './NotFoundPage';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} name="Home" path="/" component={App} />
          <Redirect exact={true} from="*/home" to="/" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};