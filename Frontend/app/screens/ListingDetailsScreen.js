import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
{/* { uri: imageUrl } */}
{console.log(listing.images)}
{/* imageUrl={item.images[0].url}   */}

                <Image style={styles.image} source={{ uri: listing.images[0].url }} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.subTitle}>${listing.price}</AppText>
                    <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/wajdi.jpg')}
                        title="Wajdi bejaoui"
                        subTitle="5 Listings" />
                    </View>
             </View>
             
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer : {
        padding :20,
    },
    image : {
        width : '100%',
        height : 300,
    },
    subTitle : {
        color : colors.success,
        fontWeight : 'bold',
        fontSize : 20,
        marginVertical : 10,
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold'
    },
    userContainer : {
        marginVertical : 40,
    },
    
})

export default ListingDetailsScreen;