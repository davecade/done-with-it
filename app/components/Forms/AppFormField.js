import { StyleSheet } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput/AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
    const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormField;

const styles = StyleSheet.create({});
