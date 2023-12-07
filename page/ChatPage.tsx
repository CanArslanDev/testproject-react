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

import {AppState} from '../redux';
import {sendMessage, deleteMessage} from '../redux/actions';
import {Message} from '../redux/models';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import React, {useState} from 'react';
const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({sendMessage, deleteMessage}, dispatch);
type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;
const ChatPage: React.FC<AppProps> = (props: AppProps) => {
  const initMessage: Message = {
    user: 'kullanıcı',
    timestamp: new Date().getTime(),
    text: '',
  };
  const [message, setMessage] = useState<Message>(initMessage);
  const handleSend = () => {
    console.log('Message:' + message.text);
    if (message.text === '') {
      return;
    }
    props.sendMessage(message);
    setMessage(initMessage);
  };
  const handleChangeText = (e: string) => {
    setMessage({
      text: e,
      timestamp: new Date().getTime(),
      user: 'kullanıcı',
    });
  };
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursText = hours < 10 ? `0${hours}` : hours;
    const minutesText = minutes < 10 ? `0${minutes}` : hours;
    return `${hoursText}:${minutesText}`;
  };
  const renderItem = ({item}) => (
    <View
      style={
        item.user !== 'kullanıcı'
          ? styles.messageContainer
          : styles.messageContainerUser
      }>
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{formatTime(item.timestamp)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.appbarView}>
        <Text style={styles.appbarText}>Chat</Text>
      </View> */}
      <FlatList
        style={styles.messageList}
        data={props.chat.messages}
        keyExtractor={item => item.timestamp.toString()}
        renderItem={renderItem}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            returnKeyType="send"
            onChangeText={handleChangeText}
            onSubmitEditing={handleSend}
            value={message.text}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText} onPress={handleSend}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbarView: {
    height: 70,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  appbarText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  messageList: {
    flex: 1,
    margin: 10,
  },
  messageContainerUser: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '70%',
  },
  messageContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '70%',
  },
  messageText: {
    color: '#fff',
    fontSize: 15,
    marginEnd: 40,
  },
  messageTime: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.7,
    marginStart: 10,
    position: 'absolute',
    end: 10,
    bottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    borderColor: '#2196F3',
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#2196F3',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
