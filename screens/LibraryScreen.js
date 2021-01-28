import React from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

export default function LibraryScreen({ navigation, data }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Books</Text>
            <ScrollView contentContainerStyle={styles.books}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                    
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Book', {
                                id: item.id
                            })
                        }}>
                            <View style={styles.book}>
                                <View style={styles.book_left}>
                                    <Image source={{ uri: item.volumeInfo.imageLinks.smallThumbnail }}
                                        style={styles.book_image} />
                                </View>
                                <Text style={styles.book_title}>{item.volumeInfo.title}</Text>
                                <Text style={styles.book_date}>{item.volumeInfo.publishedDate}</Text>
                            </View>
                        </TouchableOpacity>}
                    keyExtractor={item => item.id.toString()} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        margin: 10
    },
    book: {
        margin: 10,
        borderWidth: 3,
        borderColor: 'lightgray',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    book_image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    book_title: {
        margin: 20,
        textAlign: 'center'
    },
    book_date: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        padding: 5,
    },
    book_view: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        padding: 5,
        backgroundColor: 'lightgray',
        borderRadius: 5
    }
})