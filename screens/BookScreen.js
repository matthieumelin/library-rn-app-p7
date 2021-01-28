import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';

import axios from 'axios';

export default function BookScreen({ route }) {
    const { id } = route.params;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter?id=${id}`)
            .then((res) => {
                setData(res.data.items);
            })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.book}>
                <Text>{data.id}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    book: {

    }
})