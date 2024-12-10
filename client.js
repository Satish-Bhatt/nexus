import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const FileSender = () => {
  let socket;

  useEffect(() => {
    socket = new WebSocket('ws://localhost:8080');
    
    socket.onopen = () => {
      console.log('Connected to server');
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendFile = () => {
    const fileData = 'Hello, this is a file content';
    socket.send(fileData);
    console.log('File sent!');
  };

  return (
    <View style={styles.container}>
      <Button title="Send File" onPress={sendFile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default FileSender;
