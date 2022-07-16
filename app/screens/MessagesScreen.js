import { FlatList, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

let initialMessages = [
    {
        id: 1,
        title: "Murphy has worked as a voice actor, including roles playing the Chinese dragon Mushu in Disney's Mulan (1998), Thurgood Stubbs in the sitcom The PJs (1999–2001), and Donkey in DreamWorks Animation's Shrek series (2001–2010). In some films he plays multiple roles in addition to his main character; this is intended as a tribute to one of his idols, Peter Sellers. He has played multiple roles in Coming to America (1988), Wes Craven's Vampire in Brooklyn (1995), the Nutty Professor films,",
        description:
            "Edward Regan Murphy (born April 3, 1961)[2] is an American actor, comedian, writer, producer, and singer. He rose to fame on the sketch comedy show Saturday Night Live, for which he was a regular cast member from 1980 to 1984. Murphy has also worked as a stand-up comedian and was ranked No. 10 on Comedy Central's list of the 100 Greatest Stand-ups of All Time",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "Murphy has worked as a voice actor, including roles playing the Chinese dragon Mushu in Disney's Mulan (1998), Thurgood Stubbs in the sitcom The PJs (1999–2001), and Donkey in DreamWorks Animation's Shrek series (2001–2010). In some films he plays multiple roles in addition to his main character; this is intended as a tribute to one of his idols, Peter Sellers. He has played multiple roles in Coming to America (1988), Wes Craven's Vampire in Brooklyn (1995), the Nutty Professor films,",
        description:
            "Murphy has worked as a voice actor, including roles playing the Chinese dragon Mushu in Disney's Mulan (1998), Thurgood Stubbs in the sitcom The PJs (1999–2001), and Donkey in DreamWorks Animation's Shrek series (2001–2010). In some films he plays multiple roles in addition to his main character; this is intended as a tribute to one of his idols, Peter Sellers. He has played multiple roles in Coming to America (1988), Wes Craven's Vampire in Brooklyn (1995), the Nutty Professor films,",
        image: require("../assets/mosh.jpg"),
    },
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (id) => {
        const newMessages = messages.filter((message) => message.id !== id);
        setMessages(newMessages);
    };

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
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item.id)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages(initialMessages);
                }}
            />
        </Screen>
    );
};

export default MessagesScreen;
