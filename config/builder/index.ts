import Webpack from 'webpack';
import WebpackDevServer, { Configuration } from 'webpack-dev-server';
import config from './webpack.config';

const port = 8080;
const host = '0.0.0.0'

const devServerOptions: Configuration = {
  port,
  host,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  hot: true,
  open: true,
};

WebpackDevServer.addDevServerEntrypoints(config, devServerOptions);
const compiler = Webpack(config);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(port, host, () => {
  console.log(`Starting server on http://${host}:${port}`);
});
