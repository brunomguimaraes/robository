import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Gatekeeper from '../Gatekeeper';
import Dinotron from '../Dino';

const AppComp = () => {
  return (
      <Switch>
        <Route path="/gatekeeper" component={Gatekeeper} />
        <Route path="/dinotron" component={Dinotron} />

        <Route exact path="/" render={() => <Redirect to="/gatekeeper" />} />
        <Route path="/*" component={Gatekeeper} />
      </Switch>
  );
};

const App = withRouter(AppComp);
export default App;
