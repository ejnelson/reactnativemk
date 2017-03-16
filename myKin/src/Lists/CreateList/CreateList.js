import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';
import navStyles from '../../Shared/NavBar/style';

export default class CreateList extends Component {
    static navigationOptions = {
        title: 'Create a List',
        header: { style: navStyles.navBarBlue, titleStyle: navStyles.navBarBlue }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            forKin: null
        };
    }

    onChooseKinPressed() {
        console.log(this.props);
        const { navigate } = this.props.navigation;
        navigate('ChooseKin', { onChooseKin: kin => this.setState({ forKin: kin }) });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={appStyles.input} placeholder="Name of List" />
                <TouchableHighlight onPress={this.onChooseKinPressed.bind(this)}>
                    <Text style={appStyles.input}>
                        {this.state.forKin ? this.state.forKin.name : "Who's it for?"}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

CreateList.propTypes = {
    forKin: React.PropTypes.shape({ name: React.PropTypes.string }),
    navigation: React.PropTypes.shape({
        navigate: React.PropTypes.func.isRequired
    }).isRequired
};

CreateList.defaultProps = {
    forKin: null
};
