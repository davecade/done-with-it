import { StyleSheet } from "react-native";
import React from "react";
import Button from "../Button/Button";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <Button text={title} color={colors.primary} onPress={handleSubmit} />
    );
};

export default SubmitButton;

const styles = StyleSheet.create({});
