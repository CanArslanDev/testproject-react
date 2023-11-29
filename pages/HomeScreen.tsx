// HomeScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTrip } from './actions';

const HomeScreen: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddTrip = () => {
        const newTrip = { id: 4, destination: 'Istanbul', date: '2023-12-01' };
        dispatch(addTrip(newTrip));
    };

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Add Trip" onPress={handleAddTrip} />
        </View>
    );
};

export default HomeScreen;
