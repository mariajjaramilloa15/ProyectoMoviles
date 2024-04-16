import React, { useEffect, useState, } from "react";
import { Modal, StyleSheet, Text, View, Button } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import client from "../../../api/client";

export const UserDetailModal = ({ visible, closeModal, userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await client.get(`/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        if (visible && userId) {
            fetchUser();
        }
    }, [visible, userId]);

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContent}>
                {user ? (
                    <View>
                        <Text>Name: {user.user_name}</Text>
                        <Text>Email: {user.user_email}</Text>
                        <Text>Role: {user.user_role}</Text>
                        <Text>Active: {user.active ? "Yes" : "No"}</Text>
                    </View>
                ) : (
                    <Text>Loading user details...</Text>
                )}
                <Button title="Close" onPress={closeModal} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        padding: 20,
    },
});
