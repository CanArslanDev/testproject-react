import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

interface HomePageProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}

interface User {
  id: string;
  username: string;
}

const HomePage = ({navigation}: HomePageProps) => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', username: 'User1'},
    {id: '2', username: 'User2'},
    {id: '3', username: 'User3'},
  ]);

  const handleUserSelect = (selectedUser: User) => {
    console.log(`Selected user: ${selectedUser.username}`);
  };

  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('ChatPage')}>
      <View style={styles.user}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/020/168/663/original/happy-guy-with-curtain-hairstyle-flat-avatar-icon-with-green-dot-editable-default-persona-for-ux-ui-design-profile-character-picture-with-online-status-colorful-messaging-app-user-badge-vector.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.usernameText}>{item.username}</Text>
          <Text numberOfLines={1} style={styles.statusText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.userList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  userList: {
    flexGrow: 1,
  },
  userItem: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomePage;
