import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { MyStack } from './navigations/stack-navigation';
import MyTabs from './navigations/button-tabs-navigation';
import { Provider } from 'react-redux';
import configureStore, { AppState } from './redux';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteMessage, sendMessage } from './redux/actions';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs></MyTabs>
      </NavigationContainer>
    </Provider>
  );
};


const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
});
// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators({ sendMessage, deleteMessage }, dispatch);
// type AppProps = ReturnType<typeof mapStateToProps> &
//   ReturnType<typeof mapDispatchToProps>;
export default App;
