import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import TextInput from '../Shared/TextInput';
import navStyles from '../Shared/NavBar/style';
import NavButton from '../Shared/NavBar/NavButton';
import { defaultBackgroundColor, textColor } from '../style/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: defaultBackgroundColor
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#D0CCCC',
        margin: 10
    },
    text: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 24
    },
    placeholderColor: { color: '#D0CCCC' },
    valueColor: { color: textColor }
});

export default class CreateList extends Component {
    static navigationOptions = {
        title: 'Create New List',
        header: ({ state }) => ({
            style: navStyles.navPrimaryBg,
            titleStyle: navStyles.navPrimaryText,
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

    handleSubmitItem(newItem) {
        this.setState({
            items: this.state.items.concat([newItem])
        });
    }

    validateInput() {
        if (this.state.name.length < 1) {
            Alert.alert('Woah!', 'The list name cannot be blank');
            return false;
        } else if (!this.state.forKin) {
            Alert.alert('Woah!', 'You need to choose a Kin for this list');
            return false;
        } else if (this.state.items.length < 1) {
            Alert.alert('Woah!', 'This list needs at least one item');
            return false;
        }
        return true;
    }

    handleSavePressed() {
        if (this.validateInput()) {
            this.props.screenProps.saveNewList({
                name: this.state.name,
                for: this.state.forKin,
                items: this.state.items
            });
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={name => this.setState({ name })}
                    placeholder="Name of List"
                />
                <TouchableHighlight style={styles.row} onPress={this.onChooseKinPressed.bind(this)}>
                    <Text
                        style={[
                            this.state.forKin ? styles.valueColor : styles.placeholderColor,
                            styles.text
                        ]}
                    >
                        {this.state.forKin ? `For: ${this.state.forKin.name}` : "Who's it for?"}
                    </Text>
                </TouchableHighlight>
                {this.state.items.map(item => (
                    <View key={item.name} style={styles.row}>
                        <Text style={[styles.valueColor, styles.text]}>{item.name}</Text>
                        <TouchableHighlight
                            onPress={() => {
                                const items = this.state.items;
                                items.splice(items.indexOf(item), 1);
                                this.setState({ items });
                            }}
                        ><Text>X</Text></TouchableHighlight>
                    </View>
                ))}
                <TouchableHighlight
                    style={styles.row}
                    onPress={() => this.props.navigation.navigate('CreateListItem', {
                        onSubmit: this.handleSubmitItem.bind(this)
                    })}
                >
                    <Text style={[styles.placeholderColor, styles.text]}>Add Item</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

CreateList.propTypes = {
    navigation: React.PropTypes.shape({
        navigate: React.PropTypes.func.isRequired,
        goBack: React.PropTypes.func.isRequired,
        setParams: React.PropTypes.func.isRequired
    }).isRequired,
    screenProps: React.PropTypes.shape({
        saveNewList: React.PropTypes.func.isRequired
    }).isRequired
};

CreateList.defaultProps = {
    forKin: null
};
