import React from 'react';
import {
    Text,
    View,
    Button,
    Image
} from 'react-native';

export class HomeScreen extends React.Component {

    static navigationOptions = {
        header: {
            right: (
                <Button title="Logout" onPress={()=> {}}/>
            )
        },
    };

    constructor(props) {
        super(props);
        this.logout.bind(this);
    }

    logout() {
        navigate("Login")
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Wallet App!</Text>
            </View>
        );
    }
}