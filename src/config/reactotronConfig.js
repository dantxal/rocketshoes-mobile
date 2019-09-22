import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.80' })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
