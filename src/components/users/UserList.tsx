import React, { useEffect, useMemo, useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, Switch, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import client from "../../../api/client";
import { TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { UserDetailModal } from "./UserDetailModal";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

//Constants
const BASE_URL = "http://192.168.56.1:3002";
const UPLOADS_FOLDER = "users";
const AVATAR_FALLBACK_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU";

//Component
export const UserList = ({ users }) => {
    const [userSwitchState,  setUserSwitchState] = useState({});
    const [selectUserId, setSelectUserId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const initialSwitchState = {};
        users.forEach((user) => {
            initialSwitchState[user.id] = user.active;
        });
        setUserSwitchState(initialSwitchState);
    }, [users]);

    const toggleSwitch = async (userId) => {
        Alert.alert(
            "Confirmar cambio estado",
            "¿Estás segurp de cambiar el estado del usuario?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Cambiar",
                    onPress: async () => {
                        if (typeof userId === "string" && userId.length > 0){
                            setUserSwitchState((prevState) => ({
                                ...prevState,
                                [userId]: !prevState[userId],
                            }));
                            await client.patch(`/users/edit/${userId}`, {
                                active: !userSwitchState[userId],
                            });
                        } else {
                            console.log("Error al cambiar el estado del usuario");
                        }
                    },
                },
            ]
        );
    };

    const handleDetailUser = async (userId) => {
        setSelectUserId(userId);
        setModalVisible(true);
    };

    const handleEditUser = (userId) => {
        console.log("Editar usuario con id:", userId);
      };
      
    
      const handleDeleteUser = async (userId) => {
        Alert.alert(
            "Eliminar Usuario",
            "¿Está seguro de eliminar este usuario?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Eliminar",
                    onPress: async () => {
                        try {
                            await client.delete( `/users/delete/${userId}` );
                            console.log("Usuario eliminado exitosamente");
                            Alert.alert("Usuario eliminado exitosamente");
                        } catch (error) {
                            console.error("Error al eliminar el usuario", error);
                        }
                    },
                    style: "destructive",
                },
            ]
        );
    };  
    
    const renderUserItem = ({ item }) => (
        console.log(item.id),
        <ListItem
          bottomDivider
          style={styles.listItem}
        >
            <Avatar
              rounded
              size={60}
              source={{
                uri: item.avatar 
                  ? `${BASE_URL}/${UPLOADS_FOLDER}/${item.avatar}`
                  : AVATAR_FALLBACK_URL,
              }}
            />
            <ListItem.Content style={styles.content}>
            <ListItem.Title style={styles.title}>{item.user_name}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>
                    {item.user_email}
                </ListItem.Subtitle>
                {item.user_role && (
                    <ListItem.Subtitle>{item.user_role}</ListItem.Subtitle>
                )}
            </ListItem.Content>
            <View style={styles.switchContainer}>
                <Switch
                  trackColor={{ false:"767577", true: "767577" }}
                  thumbColor={ userSwitchState[item.id] ? "#f5dd4b" : "#f4f3f4" }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => toggleSwitch(item.id)}
                  value={userSwitchState[item.id]}
                />
            </View>
            <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => handleEditUser(item.id)}>
                    <Ionicons name="search-outline" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDetailUser(item.id)}>
                    <Ionicons name="pencil-outline" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteUser(item.id)}>
                    <Ionicons name="trash-outline" size={22} color="black" />
                </TouchableOpacity>
            </View>
        </ListItem>

    );
    return (
        <>
           
          <FlatList
            data={users}
            renderItem={renderUserItem}
            keyExtractor={(item) => item.id}
            style={styles.container}
          />
          <UserDetailModal
            visible={modalVisible}
            closeModal={() => setModalVisible(false)}
            userId={selectUserId}
          />
        </>
    );
};

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    listItem: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        width: "95%",
        height: 100,
    },
    content: {
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 12,
        color: "gray",
    },
    switchContainer: {
        alignSelf: "center",
    },
    actionsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 60,
        marginRight: 5,
    },
    refresh:{
        marginLeft: 300,
    },
    text:{
        fontSize: 5,
        fontWeight: "bold",
        marginBottom: 20,
    }
});