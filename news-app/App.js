import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height:100, 
    width:'100%',
    borderColor:'gray',
    borderWidth:1,
    flexDirection: 'row',
  },
  leftContainer: {
    backgroundColor: 'red',
    width:100,
  },
  rightConteiner: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: 'https://i.picsum.photos/id/211/200/200.jpg?hmac=VJ4wl95YuQJMvM_1O83L3nSfTn20OxaVfWe0wNMZrIc'}}
            />
          </View>
          <View style={styles.rightConteiner} />
        </View>
    </View>
  );
}