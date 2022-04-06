import React, { useState, useEffect } from 'react'
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';

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

export default function App() {
  //useState
  const [articles, setArticles] = useState([])
  //useEffect:第2引数に空配列を渡すと、初回レンダー時のみ発火する
  useEffect( () => {
    alert("called");
    const timer = setTimeout( () => {
      setArticles(dummyArticles);
    }, 2000)
    //下記はクリーンナップ関数
    return () => clearTimeout(timer);
  },[])

  //jsonから配列を生成
  //Reactあるある。配列を展開するときkeyがないと怒られる。indexからkeyを生成する
  // const items = articles.map( (article, index) => { return (    
  //   <ListItem 
          // imageUrl={article.urlToImage}
          // title={article.title}
          // author={article.author}
          // key={index}
  //   />
  // )} )
  //FlatList:これでラップしないとスクロールできないので下記のように書き換える(FlatListの場合はkeyはkeyExtractor)
  //SafeAreaViewはiPhoneで見た場合に、余白を作ってあげるコンポーネント
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={articles}
        renderItem={({item}) => (
          <ListItem 
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          /> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}