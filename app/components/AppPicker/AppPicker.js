import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Modal,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";
import AppText from "../AppText/AppText";
import Button from "../Button/Button";
import Screen from "../Screen/Screen";
import PickerItem from "../PickerItem/PickerItem";

const AppPicker = ({
    icon,
    placeholder,
    items,
    onSelectedItem,
    selectedItem,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <MaterialCommunityIcons
                        name={"chevron-down"}
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button
                        text="close"
                        color={colors.primary}
                        onPress={() => setModalVisible(false)}
                    >
                        Close this please
                    </Button>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectedItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
};

export default AppPicker;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    textInput: defaultStyles.text,
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
});
