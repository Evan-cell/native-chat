import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image source={{ uri: chat.user.image }} style={styles.image} />

      {/* content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>

          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'stretch',
        marginHorizontal:10,
        marginVertical:5,
        height:70,

    },
    image:{
        width:60,
        aspectRatio:1,
        borderRadius:30,
        marginRight:10,
    
    },
    content:{
        flex:1,
        borderBottomColor: 'lightgrey',
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    row:{
        flexDirection:'row',
        marginBottom:5,
    },
    name:{
       fontWeight: 'bold',
       flex:1, 
    },
    subTitle:{
        color:'grey',
    }
})