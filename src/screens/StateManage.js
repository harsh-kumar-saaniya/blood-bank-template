import React from 'react'
import { View, Text } from 'react-native'
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import { Input } from 'native-base';
import { Button } from 'react-native-paper';
import { set_data } from '../store/actions/index';



function StateManage(props) {
    console.log('props------->>>>>', props.user);
    return (
        <View>
            <Text>Hello world {props.user.username} </Text>
            <Text>This is email {props.user.email} </Text>
            <Input
                onChangeText={(e) => setUserName(e)}
                // value={userName}
                style={{ backgroundColor: 'pink' }}
            />
                <Text onPress={()=> props.set_data()} style={{ fontSize: 20, fontWeight: 'bold' }}>REGISTER</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data())
})

const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectedComponent(StateManage);
