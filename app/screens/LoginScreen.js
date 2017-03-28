import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

export class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Login Screen!</Text>
                <Button
                    onPress={() => navigate('Main')}
                    title="Do Login"
                />
            </View>
        );
    }
}