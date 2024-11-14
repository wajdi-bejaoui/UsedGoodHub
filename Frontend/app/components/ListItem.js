import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import colors from '../config/colors'
import AppText from './AppText';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image}/>}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name="chevron-down" size={25} />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 15,
        backgroundColor : colors.white,
        alignItems :'center',
        // flex: 1, // Allow the container to grow
    },
    detailsContainer : {
        marginLeft : 10,
        justifyContent : 'center',
        flex : 1,
    },
    image : {
        borderRadius : 35,
        width : 70,
        height : 70,
    },
    subTitle : {
        color : colors.medium,

    },
    title : {

        fontWeight : "500",
    },
})

export default ListItem;