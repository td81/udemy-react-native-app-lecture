import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';

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

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem />
    </View>
  );
}