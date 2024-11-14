import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { View, StyleSheet, FlatList } from 'react-native';
import routes from "../navigation/routes";

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

function ListingsScreen({navigation}) {
    return (
        <Screen style={styles.screen}>
                <FlatList
                        data={listings}
                        keyExtractor={listing => listing.id.toString()}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) => (
                            <Card 
                                title={item.title} 
                                subTitle={"$"+ item.subTitle}
                                image={item.image}  
                                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            />
                        )}
                    />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        paddingHorizontal : 20,
        backgroundColor : colors.light,
    },

})

export default ListingsScreen;