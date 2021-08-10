import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout";

const TaskFormScreen = () => {
    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                placeholder="Write a title"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#fff"
                placeholder="Write a description"
            />
            <TouchableOpacity style={styles.btnSave} disabled>
                <Text style={styles.btnText}>Save tasks</Text>
            </TouchableOpacity>
        </Layout>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "90%",
        padding: 10,
        marginBottom: 10,
        fontSize: 20,
        color: "#fff",
        borderWidth: 1,
        borderColor: "#10ac84",
        borderRadius: 5,
    },
    btnSave: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: "#10ac84",
        fontSize: 50,
    },
    btnText: {
        color: "#fff",
    },
});

export default TaskFormScreen;
