import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import navStyles from '../Shared/NavBar/style';
import { secondaryColor, defaultBackgroundColor } from '../style/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: defaultBackgroundColor,
        padding: 10
    },
    button: {
        padding: 5,
        borderRadius: 8
    },
    selected: {
        backgroundColor: secondaryColor
    },
    selectedText: {
        color: defaultBackgroundColor,
        fontWeight: '400'
    }
});

export default class ListFilterHeader extends Component {
    onPress(item) {
        if (!item.selected) {
            this.props.onPress(item.text);
        }
    }

    render() {
        const buttons = this.props.items.map(item => {
            const isSelected = item.selected;
            return (
                <View key={item.text}>
                    <TouchableHighlight
                        style={[isSelected ? globalStyles.orangeButton : {}, styles.button]}
                        onPress={() => this.onPress(item)}
                    >
                        <Text style={isSelected ? styles.selectedText : {}}>{item.text}</Text>
                    </TouchableHighlight>
                </View>
            );
        });
        return (
            <View
                style={[
                    styles.container,
                    navStyles.navDefaultBg,
                    this.props.backgroundColor
                        ? { backgroundColor: this.props.backgroundColor }
                        : {}
                ]}
            >
                {buttons}
            </View>
        );
    }
}

ListFilterHeader.defaultProps = {
    backgroundColor: null
};

ListFilterHeader.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string.isRequired, selected: PropTypes.bool })
    ).isRequired,
    onPress: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string
};
