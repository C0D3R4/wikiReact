import React from 'react'
import Router from 'react-router'
import App from './components/App'
const {Route} = Router

var routes = <Route handler={App}>
  <Route name='page' path='/page/:id' handler={page} />
</Route>
/* <Route name='page' path='/page/:id' handler={page}/> */

Router.run(routes, Router.HistoryLocation, Root => React.render(<Root />, document.getElementById('app')))

module.exports = router
