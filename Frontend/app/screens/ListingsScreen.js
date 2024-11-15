import React, { useEffect } from "react";
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import { View, StyleSheet, FlatList } from 'react-native';
import routes from "../navigation/routes";

import colors from '../config/colors';
import Card from '../components/Card';
import useApi from "../hooks/useApi";

import listingsApi from "../api/listings";

import ActivityIndicator from "../components/ActivityIndicator";


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
    {
        id : 3,
        title: "Chair",
        subTitle: "150",
        image : require('../assets/background_img.webp'),
    },
];

function ListingsScreen({navigation}) {

    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
        console.log(getListingsApi.data)
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && (
            <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
            </>
            )}
            <ActivityIndicator visible={getListingsApi.loading} />
                <FlatList
                        data={getListingsApi.data}
                        keyExtractor={listing => listing.id.toString()}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) => (
                            <Card 
                                title={item.title} 
                                subTitle={"$"+ item.price}
                                imageUrl={item.images[0].url}  
                                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            />
                        )}
                    />
            <ActivityIndicator/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        paddingTop : 20,
        marginHorizontal : 20,

        backgroundColor : colors.light,
    },

})

export default ListingsScreen;