import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

type UserProfile = {
  avatarUrl: string;
  name: string;
  email: string;
  bio: string;
};

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    avatarUrl: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
    name: 'Kullanıcı Adı',
    email: 'email@example.com',
    bio: 'Kısa biyografi…',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{uri: userProfile.avatarUrl}} style={styles.avatar} />
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  bio: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  actions: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ProfilePage;
