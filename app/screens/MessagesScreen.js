import { FlatList, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction'

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
];

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Hello")}
                        renderRightActions={ListItemDeleteAction}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

export default MessagesScreen;
