import React from "react";
import { View, Text, FlatList } from "react-native";

import TasksItem from "./TaskItem";

const TaskList = ({ tasks }) => {
    const renderItem = ({ item }) => {
        return <TasksItem tasks={item} />;
    };

    return (
        <FlatList
            style={{ width: "100%" }}
            data={tasks}
            keyExtractor={(item) => item.id + ""}
            renderItem={renderItem}
        />
    );
};

export default TaskList;
