// page/SearchPage.tsx

import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch, connect} from 'react-redux';
import {selectUser} from '../redux/actions';
import {AppState} from '../redux';
import {bindActionCreators, Dispatch} from 'redux';

const mapStateToPropsSearchPage = (state: AppState) => ({
  users: state.chat.users, // Eğer kullanıcıları chat içinde tutuyorsanız
});

const mapDispatchToPropsSearchPage = (dispatch: Dispatch) =>
  bindActionCreators({selectUser}, dispatch);

type SearchPageProps = ReturnType<typeof mapStateToPropsSearchPage> &
  ReturnType<typeof mapDispatchToPropsSearchPage> & {
    navigation: any;
  };

const SearchPage: React.FC<SearchPageProps> = ({
  navigation,
  users,
  selectUser,
}) => {
  const dispatch = useDispatch();

  const handleUserSelect = (selectedUser: any) => {
    selectUser(selectedUser);
    navigation.navigate('ChatPage');
  };

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => handleUserSelect(item)}>
      <View style={styles.user}>
        <Text style={styles.usernameText}>{item.username}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.userList}
      />
    </View>
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
  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default connect(
  mapStateToPropsSearchPage,
  mapDispatchToPropsSearchPage,
)(SearchPage);
