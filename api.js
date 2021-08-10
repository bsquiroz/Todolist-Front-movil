const baseUrl = "https://react-native-task.herokuapp.com/tasks";

export const getTasks = async () => {
    try {
        const res = await fetch(baseUrl);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};
