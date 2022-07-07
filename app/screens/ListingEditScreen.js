import { StyleSheet, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen/Screen";
import * as Yup from "yup";
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().required().label("Description"),
});

const categories = [
    { label: "Funiture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
];

const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name={"title"}
                    placeholder="Title"
                />
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                />
                <AppFormPicker
                    name={"category"}
                    placeholder={"Category"}
                    items={categories}
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name={"description"}
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="POST" />
            </AppForm>
        </Screen>
    );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    container: {
        padding: 10,
    },
});
