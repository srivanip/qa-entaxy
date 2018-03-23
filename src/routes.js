import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Taxes from './core/Taxes'
import Debt from './core/Debt'

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Taxes} />
      <Route path="/debt" component={Debt} />
    </Switch>
  </BrowserRouter>
)

export default Routes
