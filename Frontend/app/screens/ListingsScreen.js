import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { View, StyleSheet, FlatList } from 'react-native';

import colors from '../config/colors';
import Card from '../components/Card';
const listings = [
    {
        id : 1,
        title: "jacket",
        subTitle: "100",
        image : require('../assets/jacket.jpg'),
    },
    {
        id : 2,
        title: "Chair",
        subTitle: "100",
        image : require('../assets/background_img.webp'),
    },
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.flatContainer}>
                <FlatList
                        data={listings}
                        keyExtractor={listing => listing.id.toString()}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) => (
                            <Card 
                                title={item.title} 
                                subTitle={"$"+ item.subTitle}
                                image={item.image} />)} 
                            
                    />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
        backgroundColor : colors.light,
    },
    flatContainer : {
        marginVertical : 20,
        // borderColor: 'red', // Added border color for debugging
        // borderWidth: 1, // Added border width for debugging
        
    },
})

export default ListingsScreen;