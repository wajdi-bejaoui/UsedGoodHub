import React, {useState} from 'react';
import { FlatList, Platform, SafeAreaView,StatusBar,  StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants'
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        title : 'Wajdi bejaoui',
        description : 'hey there are you available !!!',
        image : require('../assets/wajdi.jpg'),
    },
    {
        id: 2,
        title : 'Foulen ben foulen',
        description : 'hey there are you available !!! i need to ask about something really quick',
        image : require('../assets/wajdi.jpg'),
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    const  handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => 
                <ListItem 
                    onPress={() => console.log(item)}
                    title={item.title}
                    subTitle={item.description}
                    image={item.image} 
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}/>
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setMessages([
                            {
                                id: 1,
                                title : 'Wajdi bejaoui',
                                description : 'hey there are you available !!!',
                                image : require('../assets/wajdi.jpg'),
                            },
                            {
                                id: 2,
                                title : 'Foulen ben foulen',
                                description : 'hey there are you available !!! i need to ask about something really quick',
                                image : require('../assets/wajdi.jpg'),
                            },
                        ])
                    }}
                    
                    />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;