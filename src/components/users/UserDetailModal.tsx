import React, { useEffect, useState, } from "react";
import { Modal, StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Avatar, ListItem, Input } from "react-native-elements";
import client from "../../../api/client";
import { MaterialIcons } from "@expo/vector-icons";

export const UserDetailModal = ({ visible, closeModal, userId }) => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await client.get(`/users/${userId}`);
                setUser(response.data);
                setName(response.data.name);
                setEmail(response.data.email);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        if (visible && userId) {
            fetchUser();
        }
    }, [visible, userId]);

    const handleUpdateDetails = async () => {
        try {
            await client.patch(`/users/update/${userId}`, { user_name: name, email: email });
            alert('¡Datos de usuario actualizados correctamente!');
            closeModal();
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContent}>
                <Pressable onPress={closeModal} style={styles.closeModal}>
                    <MaterialIcons name="close" size={18} color="black"/>
                </Pressable>
                <Text style={styles.title}>Actualizar Datos</Text>
                <Input 
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                />   
                <Input
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}
                />
                <Button 
                    title="Guardar"
                    onPress={handleUpdateDetails}
                ></Button>
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
        borderRadius: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
      },
      closeModal: {
        position: "absolute",
        top: 40,
        right: 10,
        padding: 10,
      },
});
