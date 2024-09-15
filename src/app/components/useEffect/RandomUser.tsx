import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const RandomUserComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      setUsers(response.data.results);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>Error: {error}</Text>;
  }

  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text
          style={styles.name}
        >{`${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.login.uuid}
      />
      <TouchableOpacity style={styles.button} onPress={fetchUsers}>
        <Text style={styles.buttonText}>Fetch New Random Users</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
    width: "80%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RandomUserComponent;
