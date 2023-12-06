import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: "https://img.freepik.com/free-icon/user_318-219692.jpg?w=2000" }}
                resizeMode="cover"
            />
            <Text style={styles.text}>Hello User!</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 30,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    profileImageContainer: {
        translateY: -43,
        alignSelf: 'center',
    },
    profileImage: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
        borderWidth: 2,
        borderRadius: 75,
        borderColor: '#fff',
    },
});

export default App;
