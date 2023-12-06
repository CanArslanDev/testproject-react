import React from 'react';
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

const ChatPage = () => {
  const messages = [
    {user: 'kullanıcı', text: 'Merhaba!', timestamp: new Date().getTime()},
    // Add more sample messages as needed
  ];

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const hoursText = hours < 10 ? `0${hours}` : hours;
    const minutesText = minutes < 10 ? `0${minutes}` : minutes;
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
      <View style={styles.appbarView}>
        <Text style={styles.appbarText}>Chat</Text>
      </View>
      <FlatList
        style={styles.messageList}
        data={messages}
        keyExtractor={item => item.timestamp.toString()}
        renderItem={renderItem}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          returnKeyType="send"
          placeholder="Type a message..."
          // Add onChangeText and value props as needed
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

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
    marginBottom: 10,
  },
  messageContainerUser: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#4CAF50', // Green color for user messages
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '70%',
  },
  messageContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#2196F3', // Blue color for other messages
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
  textInput: {
    flex: 1,
    borderColor: '#2196F3',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2196F3',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatPage;
