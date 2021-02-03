import React from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SplashScreen(props) {
    const navigation = useNavigation();

    setTimeout(() => {
        props.navigation.navigate('login')
    }, 2000);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor='#ffff'
            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 150, height: 150, marginBottom: 14 }} source={require('../Images/blood-icon-png.png')} />
            </View>
            <View><Text style={styles.appName}>Blood Bank</Text></View>
        </View>

    )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
    }
});

export default SplashScreen;
