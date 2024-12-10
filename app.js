import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle file selection when the user clicks the Send button
  const handleSend = async () => {
    try {
      const files = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles], // Allow all file types
      });
      setSelectedFiles(files);
      console.log('Selected files:', files);
      Alert.alert('Files Selected', `${files.length} file(s) selected`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled file selection');
      } else {
        console.error('Error selecting file:', err);
      }
    }
  };

  const handleReceive = () => {
    Alert.alert('Receive', 'This feature is under development');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nexus</Text>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleReceive}>
        <Text style={styles.buttonText}>Receive</Text>
      </TouchableOpacity>

      {selectedFiles.length > 0 && (
        <View style={styles.fileList}>
          <Text style={styles.fileListTitle}>Selected Files:</Text>
          {selectedFiles.map((file, index) => (
            <Text key={index} style={styles.fileItem}>
              📄 {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0f3460',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fileList: {
    marginTop: 20,
    width: '80%',
  },
  fileListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  fileItem: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
});

export default App;
