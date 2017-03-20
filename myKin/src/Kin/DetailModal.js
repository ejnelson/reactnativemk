import React, { Component, PropTypes } from 'react';
import { View, Picker, TouchableHighlight, Text } from 'react-native';
import TextInput from '../Shared/TextInput';
import styles from './styles';

export default class DetailModal extends Component {
  static defaultProps = {
    navigation: {
      state: {
        params: {
          categories: [],
        },
      },
    },
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          categories: PropTypes.arrayOf(PropTypes.string),
          handleSaveDetail: PropTypes.func.isRequired,
        }),
      }),
      goBack: PropTypes.func.isRequired,
    }),
  };

  constructor(props, context) {
    super(props, context);

    this.textInput = null;

    this.state = {
      category: props.navigation.state.params.categories[0],
      value: '',
    };
  }

  handleSaveAndClose() {
    const { handleSaveDetail } = this.props.navigation.state.params;
    handleSaveDetail({ type: this.state.category, value: this.state.value });
    this.props.navigation.goBack();
  }

  handleSaveAndReset() {
    const { handleSaveDetail } = this.props.navigation.state.params;
    handleSaveDetail({ type: this.state.category, value: this.state.value });
    this.textInput.setNativeProps({ text: '' });
  }

  render() {
    const { categories } = this.props.navigation.state.params;
    return (
      <View style={styles.containerPadded}>
        <TouchableHighlight
          style={{ alignSelf: 'flex-end' }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>X</Text>
        </TouchableHighlight>
        <Text style={styles.name}>Category</Text>
        <Picker
          selectedValue={this.state.category}
          onValueChange={category => this.setState({ category })}
        >
          {categories.map(cat => <Picker.Item key={cat} label={cat} value={cat} />)}
        </Picker>
        <TextInput
          getRef={component => this.textInput = component}
          placeholder="Interest/Detail"
          onChangeText={value => this.setState({ value })}
        />
        <View style={styles.fullWidthButtons}>
          <View style={[styles.buttonSecondary, styles.secondaryBg]}>
            <TouchableHighlight onPress={this.handleSaveAndReset.bind(this)}>
              <Text style={[styles.buttonText, styles.inverseText]}>Save & Add Another</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonSecondary}>
            <TouchableHighlight onPress={this.handleSaveAndClose.bind(this)}>
              <Text style={[styles.buttonText, styles.secondaryText]}>Save Interest/Info</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
