import { StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card/Card";
import Screen from "../components/Screen/Screen";

let listingData = [
    {
        id: 1,
        title: "Red Jacket for sale!",
        price: "$100",
        image: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: "$1000",
        image: require("../assets/couch.jpg"),
    },
];

const ListingsScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState(listingData);

    return (
        <Screen>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(listing) => listing.id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                subtitle={item.price}
                                image={item.image}
                            />
                        );
                    }}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setData(listingData);
                    }}
                />
            </View>
        </Screen>
    );
};

export default ListingsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f4f4",
        height: "100%",
        padding: 20,
    },
});
