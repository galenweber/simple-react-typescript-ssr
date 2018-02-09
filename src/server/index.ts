import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import html from '../client/html';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
  /**
   * renderToString() will take our React app and turn it into a string
   * to be inserted into our Html template function.
   */
  const body = renderToString(React.createElement(App));
  const title = 'Server side Rendering with Styled Components';

  res.send(
    html({
      body,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
