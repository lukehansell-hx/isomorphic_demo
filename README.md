#isomorphic demo

**tl;dr;** - clone this repo then run `npm start` and `open http://localhost:5000/slides/0`

## Intro
This repo is an example of an isomorphic javascript application.
It is also the presentation for my demo on isomorphic javascript.
Two birds, one stone.

## Running the demo
`npm start` will set everything off for you

then

`open http://localhost:5000/slides/0`

## How it works

- We use npm as the task runner.
- We use webpack as the bundler.
- We create on bundle from the `app/client.jsx` served on port 8080 from `public/js`.
- We create the css from `app/style/main.less`
- Client requires `app/app.jsx` and provides an easy access client side front to it.
- We use an express server to forward the routing to `app.js` which returns a React object.
- `app.js` uses React Router to do proper routing internally.
- We turn the React object into an html string on the server and inject it into a handlebars template.
- Express then sends this rendered template to the user.
- The template also includes a script tag for the `client.js` file.
- This loads over the top of the server rendered and takes over control of the page.
