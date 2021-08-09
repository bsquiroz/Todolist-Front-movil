import React, { useEffect } from "react";
import { View, Text } from "react-native";

const baseUrl = "http://10.0.2.2:3000/tasks";

const HomeScreen = () => {
    const loadTasks = async () => {
        try {
            const res = await fetch(baseUrl);
            const data = await res.json();
            console.log(data);
            console.log("que mas");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {}, []);

    return (
        <View>
            <Text>desde HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;
