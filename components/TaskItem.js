import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskItem = ({ tasks }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>
                {tasks.title} - #{tasks.id}
            </Text>
            <Text style={styles.itemTitle}>{tasks.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
    },

    itemTitle: {
        color: "#fff",
    },
});

export default TaskItem;
