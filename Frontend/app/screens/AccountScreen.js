import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import { View, StyleSheet, FlatList } from 'react-native';

import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
    },
];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.itemContainer}>
                <ListItem 
                    title="My Title" 
                    subTitle="My Sub" 
                    image={require('../assets/wajdi.jpg')} 
                />
            </View>
            
            
            <View style={styles.flatContainer}>
                <FlatList
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) => (
                            <ListItem 
                                title={item.title} 
                                IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} 
                            />
                        )}
                    />
            </View>
            <View style={styles.logoutContainer}>
                <ListItem title="Log Out" 
                    IconComponent={<Icon name="logout" backgroundColor="#ffe66d" iconColor="white" />}/>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen : {
        backgroundColor : colors.light,
    },
    flatContainer : {
        marginVertical : 20,
        // borderColor: 'red', // Added border color for debugging
        // borderWidth: 1, // Added border width for debugging
        
    },
    itemContainer : {
        minHeight : 80,
        marginVertical : 20,
    },
    logoutContainer : {
        minHeight : 40,
    },

})

export default AccountScreen;


      
