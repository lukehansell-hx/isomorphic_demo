const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const routes = require('./routes');
const path = require('path');

const express = require('express');

const PreFetchContext = require('./shared/container/PreFetchContext');

const app = module.exports = express();

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
      console.log(err)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render

      const dataFetchingMethods = props.components.map(component =>
        component.fetchData ?
        component.fetchData(props.location.query) :
        new Promise(resolve => resolve()))

      Promise.all(dataFetchingMethods).then( data => {
        const contextData = {};
        data.forEach( (a, index) => {
          contextData[props.components[index].name || index] = a
        })
        const content = renderToString(
          <PreFetchContext {...contextData}>
            <RouterContext {...props}/>
          </PreFetchContext>
        )
        res.render('index', {
          content,
          data: JSON.stringify(contextData)
         });
      }, err => {
        console.log(err)
      });

    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  });
});

const buildHTML = function(content) {
  return htmlTemplate.replace(/<!-- placeholder -->/, content);
}

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
