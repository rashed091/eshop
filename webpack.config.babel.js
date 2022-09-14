import { isDevelopment } from './webpack/config/';
import { WebpackDevConfig } from './webpack/webpack.dev';
import { WebpackProdConfig } from './webpack/webpack.prod';

export default isDevelopment ? WebpackDevConfig : WebpackProdConfig;
