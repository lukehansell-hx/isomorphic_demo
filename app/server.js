const React = require('react')
const { renderToString } = require('react-dom/server')
const { match, RouterContext } = require('react-router')
const path = require('path')
const { Provider } = require('react-redux')

const express = require('express')

const routes = require('./routes')

import configureStore from './configureStore'

const app = module.exports = express()

app.use(express.static(path.join(__dirname, '../public'), {
  index: false
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, '../public'));

app.get('*', function(req, res){
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
      console.log('Error:', err)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render

      const store = configureStore()

      const dataFetchingMethods = props.components.map( component => {
        if(!component.fetchData || !component.mapStateToProps) return Promise.resolve()
        return component.fetchData(store.dispatch, component.mapStateToProps(store.getState(), props))
      })

      Promise.all(dataFetchingMethods)
      .then(() => {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        )

        const preloadedState = store.getState()

        res.render('index', {
          content,
          data: JSON.stringify(preloadedState)
        });
      })
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  });
});

app.listen(8080, () => {
  console.log('server listening on port 8080')
})
