import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors'
import AppText from './AppText';
function Card({title, subTitle, imageUrl, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
        {        console.log(title, subTitle, imageUrl)            }

            <Image style={styles.image} source={{ uri: imageUrl }}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius: 15,
        backgroundColor : colors.white,
        marginBottom : 20,
        overflow : "hidden"
    },
    detailsContainer : {
        padding : 15,
    },
    image : {
        width : '100%',
        height : 160,
    },
    subTitle : {
        color : colors.success,
        fontWeight : 'bold',
    },
    title : {
        marginBottom : 7,
    },
})

export default Card;