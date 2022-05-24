import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem/ListItem";

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../assets/jacket.jpg")}
            />
            <AppText></AppText>
            <View style={styles.textContainer}>
                <AppText
                    color="black"
                    otherStyles={{
                        marginBottom: 10,
                    }}
                >
                    Red jacket for sale
                </AppText>
                <AppText
                    color={colors.secondary}
                    otherStyles={{
                        marginBottom: 10,
                    }}
                >
                    $100
                </AppText>
                <View style={styles.listItemContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Hamedani"
                        subtitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    textContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    listItemContainer: {
        marginVertical: 40
    }
});
