import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Taxes from './core/Taxes/index'
import Portfolios from './core/Portfolios/index'

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Taxes} />
      <Route path="/portfolios" component={Portfolios} />
    </Switch>
  </BrowserRouter>
)

export default Routes
