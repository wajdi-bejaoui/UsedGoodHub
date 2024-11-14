import React from 'react';
import Constants from 'expo-constants'
import { SafeAreaView, StyleSheet,View } from 'react-native';

import defaultStyles from '../config/styles'

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen : {
        paddingTop : Constants.statusBarHeight,
        flex : 1,
        backgroundColor : defaultStyles.colors.light,
    },
    view : {
        flex : 1,
    }
})

export default Screen;