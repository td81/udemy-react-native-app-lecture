import React, { useState, useEffect } from 'react'
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import Constants from 'expo-constants';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//シングルクォーテーションではなく、変数を文字列に入れる場合はバッククォートを使う WindowsはShift+@キー
const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default function HomeScreen(props)  {
  const { navigation } = props;
  //useState
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  //useEffect:第2引数に空配列を渡すと、初回レンダー時のみ発火する
  useEffect( () => {
    fetchArticles();
  },[])

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={articles}
        renderItem={({item}) => (
          <ListItem 
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', {article: item})}
          /> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}