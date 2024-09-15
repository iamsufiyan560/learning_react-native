import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

interface DataProps {
  id: number;
  title: string;
  body: string;
}

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const result = await response.json();
      setData(result);
    };

    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View>
      {data.length ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: DataProps }) => (
            <View style={styles.main}>
              <Text>{item.id}</Text>
              <Text>title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
              <View style={styles.line} />
            </View>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DataFetching;

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 18,
  },
  main: {
    marginHorizontal: 18,
  },
});
