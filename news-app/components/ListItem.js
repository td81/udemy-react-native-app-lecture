import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
      height:100, 
      width:'100%',
      borderColor:'gray',
      borderWidth:1,
      flexDirection: 'row',
    },
    leftContainer: {
      width:100,
    },
    rightConteiner: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
      justifyContent: 'space-between' //文字の縦横位置の調整
    },
    text: {
      fontSize: 16,
    },
    subText: {
      fontSize: 12,
      color: 'gray',
    }
  });

  const ListItem = () => {
      return (
        <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: 'https://i.picsum.photos/id/211/200/200.jpg?hmac=VJ4wl95YuQJMvM_1O83L3nSfTn20OxaVfWe0wNMZrIc'}}
            />
          </View>
          <View style={styles.rightConteiner}>
            <Text numberOfLines={3} style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={styles.subText}>
              React News
            </Text>
          </View>
        </View>
    </View>
      )      
  };

  export default ListItem;
  