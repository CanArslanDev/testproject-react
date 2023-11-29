// TripList.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
interface Trip {
    id: number;
    destination: string;
    date: string;
}

interface TripListProps {
    trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
    const renderItem = ({ item }: { item: Trip }) => (
        <View style={styles.tripContainer}>
            <Text style={styles.destination}>{item.destination}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );

    return (
        <FlatList
            data={trips}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    tripContainer: {
        marginBottom: 16,
        padding: 16,
        borderRadius: 8,
        width: "100%",
        backgroundColor: '#e0e0e0',
    },
    destination: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        marginTop: 8,
        color: '#666',
    },
});

export default TripList;
