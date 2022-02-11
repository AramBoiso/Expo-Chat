import React, { useState } from 'react';
import { 
  StyleSheet, 
  TextInput,
  Button,
  View,
} from 'react-native';

const API = 'https://cbc1-177-248-163-21.ngrok.io';

export const Login = ({ navigation }) => {

    const [ name, setName ] = useState();

    const findUser = async () => {
      const { _id, username, role } = await (await fetch(`${API}/users/${name}`)).json();
      
      const chat =  await (await fetch(`${API}/users/${name}/chat`)).json();
      navigation.navigate('Chat', {chat, userId: _id});
      
  }

    return(
       <>
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter your username" value={name} onChangeText={setName} />
            <Button
                title="Enter the chat" 
                onPress={findUser} />
        </View> 
       </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
    input: {
      height: 50,
      width: '100%',
      borderWidth: 1,
      padding: 15,
      marginBottom: 20,
      borderColor: 'gray',
  },
});