import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebSocketServer } from 'ws';

const FileReceiver = () => {
  useEffect(() => {
    const server = new WebSocketServer({ port: 8080 });

    server.on('connection', (socket) => {
      console.log('Client connected');
      
      socket.on('message', (message) => {
        console.log('Received file:', message);
      });
    });

    return () => {
      server.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Waiting for file transfer...</Text>
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

export default FileReceiver;
