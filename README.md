#isomorphic demo

**tl;dr;** - clone this repo then run `gulp` and `open http://localhost:8080/slides/0` (check *running the demo* for more info and help)

## Intro
This repo is an example of an isomorphic javascript application.
It is also the presentation for my demo on isomorphic javascript.
Two birds, one stone.

## Running the demo
`ln -s PATH/TO/DIR/bin/ public/js/` will set up symlink for js

`mkdir public/style` for style directory

`gulp` will do all of the magic for you

then

`open http://localhost:8080/slides/0`

## How it works

- We use gulp as the task runner.
- We use browserify as the bundler.
- We create one bundle from the `app/app.jsx` backwards.
- We create on bundle from the `app/client.jsx` backwards.
- Client requires `app/app.jsx` and provides an easy access client side front to it.
- The bundled `app.js` is a function which can be run anywhere. Seriously, try it in node in your terminal.
- We use an express server to forward the routing to `app.js` which returns a React object.
- `app.js` uses React Router to do proper routing internally.
- We turn the React object into an html string on the server and inject it into a handlebars template.
- Express then sends this rendered template to the user.
- The template also includes a script tag for the `client.js` file.
- This loads over the top of the server rendered and takes over control of the page.