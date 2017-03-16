import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles';
import appStyles from '../../styles';
import navStyles from '../../Shared/NavBar/style';
import NavButton from '../../Shared/NavBar/NavButton/NavButton';

export default class CreateList extends Component {
    static navigationOptions = {
        title: 'Create New List',
        header: ({ state }) => ({
            style: navStyles.navBarBlue,
            titleStyle: navStyles.navBarBlue,
            right: <NavButton onPress={state.params.handleSavePressed}>Save</NavButton>
        })
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            name: '',
            forKin: null,
            items: []
        };
    }

    componentWillMount() {
        this.props.navigation.setParams({ handleSavePressed: this.handleSavePressed.bind(this) });
    }

    onChooseKinPressed() {
        const { navigate } = this.props.navigation;
        navigate('ChooseKin', { onChooseKin: kin => this.setState({ forKin: kin }) });
    }

    onSubmitItem(newItem) {
        this.setState({
            items: this.state.items.concat([newItem])
        });
    }

    handleSavePressed() {
        this.props.screenProps.saveNewList({
            name: this.state.name,
            for: this.state.forKin,
            items: this.state.items
        });
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={appStyles.input}
                    onChangeText={name => this.setState({ name })}
                    placeholder="Name of List"
                />
                <TouchableHighlight onPress={this.onChooseKinPressed.bind(this)}>
                    <Text style={appStyles.input}>
                        {this.state.forKin ? this.state.forKin.name : "Who's it for?"}
                    </Text>
                </TouchableHighlight>
                {this.state.items.map(item => <Text key={item.name}>{item.name}</Text>)}
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('CreateListItem', {
                        onSubmit: this.onSubmitItem.bind(this)
                    })}
                >
                    <Text>Add Item</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

CreateList.propTypes = {
    navigation: React.PropTypes.shape({
        navigate: React.PropTypes.func.isRequired,
        goBack: React.PropTypes.func.isRequired
    }).isRequired,
    screenProps: React.PropTypes.shape({
        saveNewList: React.PropTypes.func.isRequired
    }).isRequired
};

CreateList.defaultProps = {
    forKin: null
};
