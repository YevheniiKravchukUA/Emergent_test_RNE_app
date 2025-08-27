import { AppRegistry } from 'react-native';
import App from './src/App.web';
import { name as appName } from './package.json';

// register the app
AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});