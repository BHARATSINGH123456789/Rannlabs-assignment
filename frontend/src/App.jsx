import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPublisherForm from './component/RegisterPublisherForm';
import VerifyEmailPublisher from './component/VerifyEmailPublisher';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register-publisher" component={RegisterPublisherForm} />
        <Route path="/verify-email/:token" component={VerifyEmailPublisher} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
