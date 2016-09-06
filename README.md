#isomorphic demo

**tl;dr;** - clone this repo then run `npm i && npm start` and `open http://localhost:8080`

## Intro
This is an example isomorphic app which talks to hapi via the SDK to receive the data
required to render an availability page.

## Running the demo
1) Install
`npm install` as always to get the dependencies required
2) Starting the app
`npm start` will run the client side app. Running it with `NODE_ENV=production` will run the server side with client side app.
`npm start:prod:dev` uses nodemon to restart the server when changes are made for easier development

then

`open http://localhost:8080`

## How it works
Webpack builds two versions of the app - the client side and the server side. These both use the same code for rendering, the only
difference is how they are rendered.

When on an availability url the server makes a request to hapi via the SDK to fetch product availability. It then uses this within
the React components to render the availability page. It then sends this rendered page, the data used to render it and a script tag
for the client side app to the client.

When the client receives the response from the server it renders the page and attaches the data sent to a globally scoped variable.
It then parses the client side app and starts it up. The client side app looks for the data on the window and uses it as context for
the rendering of the page. Since the server and the client are using the same data the output is identical and the client side app
seamlessly takes over the page. Any further requests are then facilitated by the client side app and the server has nothing more
to do with the rendering.

If the client side availability page loads without the data having been sent from the server (perhaps we were on the search route and
so the client app was initialized and controlling routing already) then the client side app makes the request to hapi using the SDK
and the exact same code that the server used.

Behind the files `app/server.js` and `app/client.js` the code is identical. Therefore we only have one location with which to update
our code, but the code can support any and every browser(1).

1 - to support any and every browser you'd need to switch off the client side app for browsers which don't support features you're using.
You would also have to make sure that all features of your app are accessible via urls and links (for instance modals). This isn't
difficult, you just have to think ahead before attaching an event listener to pop up a modal to question how you might get there without
js.
