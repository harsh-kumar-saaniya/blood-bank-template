import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import {
    Form,
    Item,
    Input,
    Label,
    Textarea,
    Icon,
} from 'native-base';
import { RadioButton, Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';


function Register() {

    const [checked, setChecked] = React.useState('first');
    const [gender, setGender] = useState("");
    const [date, setDate] = useState(new Date())
    const [selectedValue, setSelectedValue] = useState("");
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const signUp = () => {
        const user = {
            checked,
            gender,
            date,
            selectedValue,
            userName,
            userEmail,
            password,
            address
        }

        if (user.checked === "first") {
            console.log('donor email and password====>>>>>', user.userEmail, user.password)
        }
        else {
            console.log('this is user data====>>>', user)
        }
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <StatusBar barStyle='dark-content' hidden={false} backgroundColor="#F3F4F5" translucent={true} />
                <Form style={{ flex: 1 }}>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input
                            onChangeText={(userName) => setUserName(userName)}
                            value={userName}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Email Address</Label>
                        <Input
                            autoCompleteType={'email'}
                            onChangeText={(userEmail) => setUserEmail(userEmail)}
                            value={userEmail}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input
                            autoCompleteType={'password'}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </Item>
                    <View style={styles.form__address}>
                        <Label style={{ paddingBottom: 10 }}>Address: </Label>
                        <Textarea
                            onChangeText={(address) => setAddress(address)}
                            value={address}
                            rowSpan={3} bordered placeholder="Write Your address here..."
                        />
                    </View>

                    <View style={styles.form__purpose}>
                        <Label style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingBottom: 25,
                            color: 'red'
                        }}>Purpose of Using this App *</Label>

                        <View style={styles.form__donor}>
                            <Label style={checked === 'first' ? styles.highLIght : styles.notSelected}>Become Donor</Label>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={'red'}
                            />
                        </View>
                        <View style={styles.form__findingDonor}>
                            <Label style={checked === 'second' ? styles.highLIght : styles.notSelected}>Finding Donor</Label>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={'red'}
                            />
                        </View>
                    </View>


                    <View style={{ padding: 10 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'red'
                        }}>Gender</Text>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Label style={{ color: '#000' }}>Male</Label>
                                <RadioButton
                                    value='Male'
                                    status={gender === 'Male' ? 'checked' : 'unchecked'}
                                    color={'red'}
                                    onPress={() => setGender('Male')}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Label style={{ color: '#000' }}>Female</Label>
                                <RadioButton
                                    value='Female'
                                    status={gender === 'Female' ? 'checked' : 'unchecked'}
                                    color={'red'}
                                    onPress={() => setGender('Female')}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Label style={{ color: '#000' }}>Other</Label>
                                <RadioButton
                                    value='Other'
                                    status={gender === 'Other' ? 'checked' : 'unchecked'}
                                    color={'red'}
                                    onPress={() => setGender('Other')}
                                />
                            </View>

                        </View>
                    </View>


                    <View style={styles.form__bloodGroupPicker}>
                        <Label style={{
                            marginTop: 20,
                            fontSize: 20,
                            fontWeight: 'bold',
                            // paddingBottom: 25,
                            color: 'red'

                        }}>Select Blood Group *</Label>

                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Group: A" value="A" />
                            <Picker.Item label="Group: A+" value="A+" />
                            <Picker.Item label="Group: A-" value="A-" />
                            <Picker.Item label="Group: B" value="B" />
                            <Picker.Item label="Group: B+" value="B+" />
                            <Picker.Item label="Group: B-" value="B-" />
                            <Picker.Item label="Group: AB" value="AB" />
                            <Picker.Item label="Group: AB+" value="AB+" />
                            <Picker.Item label="Group: AB-" value="AB-" />
                            <Picker.Item label="Group: O" value="O" />
                            <Picker.Item label="Group: O+" value="O+" />
                            <Picker.Item label="Group: O-" value="O-" />
                        </Picker>
                    </View>
                    <View style={styles.form__DOB}>
                        <Label
                            style={{
                                // marginTop: 20,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                        >
                            Date Of Birth
                        </Label>
                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                            androidVariant={'nativeAndroid'}
                            mode={'date'}
                        />
                    </View>
                    <Button style={{ flex: 1 }} contentStyle={{ height: 50, backgroundColor: 'red' }} mode="contained" onPress={signUp}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create Account</Text>
                        
                    </Button>
                </Form>
            </View >
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    form__address: {
        justifyContent: 'center',
        // backgroundColor: '',
        // alignItems: 'center',
        padding: 10
    },
    form__purpose: {
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        // backgroundColor: 'yellow'
    },
    form__donor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    form__findingDonor: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        color: 'red',
        justifyContent: 'space-between',

    },
    highLIght: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18
    },
    notSelected: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    form__bloodGroupPicker: {
        justifyContent: 'center',
        padding: 10,
    },
    form__DOB: {
        justifyContent: 'center',
        padding: 10
    },
    form__registerButton: {
        backgroundColor: 'red',
        height: 30,
        color: '#fff'
    }
});

export default Register;