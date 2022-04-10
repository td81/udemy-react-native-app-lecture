import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

//iframeタグではなくスマホアプリの場合は<WebView source={{uri: article.uri}} />　としたいが、
//PCのブラウザでは動作しないためiframeタグを使っている(iframeの場合、サーバ側のセキュリティ設定の都合上表示されないが)
//https://qiita.com/shunp110/items/246c727bdb546120e006
export default function ArticleScreen( { route }) {
    const { article } = route.params;
    console.log(article.url)
    return(
        <SafeAreaView style={styles.container}> 
            <iframe src={article.url} style={styles} /> 
        </SafeAreaView>
    );
}