import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setInterval(() => {
            navigation.navigate('Library');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/loading.gif')}
                style={styles.loading} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        width: 100,
        height: 100
    }
});
