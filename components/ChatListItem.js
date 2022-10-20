import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
        {/* avatar */}
      <Image 
      source={{
        uri:  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      }}
      style={styles.image}
      />
      {/* content container */}
      <View style={styles.content}>
        {/* row */}
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>Kim</Text>
            <Text style={styles.subTitle}>5:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>vipi bro nilikua nadai ukam tuchape wera flani</Text>
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