import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/screens/navigator/StackNavigator';
import { Text, View } from 'react-native';

export default function App(){
 return(
  <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
 );
}




// import React, { useState, useCallback, useEffect } from "react";
// import { 
//   SafeAreaView, 
//   StyleSheet, 
//   TextInput,
//   Button,
//   View,
//   Text,
//   FlatList,
//   StatusBar
// } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';

// // AsyncStorage

// import io from "socket.io-client";
// const API = 'http://192.168.56.1:3000';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Chat 1',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Chat 2',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Chat 2',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );


// export default function App() {

//   const [messages, setMessages] = useState([]);
//   const [userId, setUserId] = React.useState();
//   const [name, setName] = React.useState();
//   const [ screen, setScreen ] = useState(0);
//   const [hasConnection, setConnection] = useState(false);
//   const [ chats, setChats ] = useState([]);

//   useEffect( async () => {

//     const socket = io(API, {
//       transports: ['websocket'],
//       jsonp: false
//     });

//     socket.io.on("open", () => {
//       setConnection(true);
//       console.log("has connection? ", hasConnection);
//     });
//     socket.io.on("close", () => setConnection(false));

//     if(screen === 1){
      
//       socket.emit("requestChats", {
//         userId
//       });

//       socket.on("getChats", (data) => {
//         setChats( data.map( ({_id, users}) => ({ chatId: _id })));
//         // console.log("CHATS ---> ", chats);
//       });
      

//     }
//         // console.log('screen -> ', screen);
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any'
//         },

//       },

//     ])

//   }, []);

//   const findUser = async () => {
//     let { _id, username } = await (await fetch(`${API}/users/${name}`)).json();
//     setUserId(_id);
//     setScreen(1);
//     // await AsyncStorage.setItem('userId', _id);
//   }
//   const renderItem = ({ item }) => <Item title={item.chatId} />;

//   const onSend = useCallback((messages = []) => {
//     setMessages( previousMessages => GiftedChat.append(previousMessages, messages))
//   }, []);

//   switch(screen){
//     case 0: 
//       return(
//         <>
//          <GiftedChat
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id:1
//         }} ></GiftedChat>
   
//           {/* <View style={styles.container}>
//             <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
//             <Button 
//                 onPress={findUser} 
//                 title="Enter the chat" />
//           </View> */}
//         </>
//       );
//     case 1: 
//         return(
//           <View style={styles.container}>
//             <SafeAreaView >
//               <FlatList data={chats} renderItem={renderItem} keyExtractor={item => item.chatId} />
//             </SafeAreaView>

//             <Button 
//               onPress={()=>{}} 
//               title="New Chat" />
//           </View>
//         );
//   }
 

//   return (
//     <>

//       {/* LIST OF CHATS */}

      

//       {/* CHAT */}
     
     
//     </>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   listContainer:{
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#6495ed',
//     padding: 10,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     color:'#f0f8ff',
//     fontSize: 20,
//   },
//     input: {
//       height: 50,
//       width: '100%',
//       borderWidth: 1,
//       padding: 15,
//       marginBottom: 20,
//       borderColor: 'gray',
//   },
// });