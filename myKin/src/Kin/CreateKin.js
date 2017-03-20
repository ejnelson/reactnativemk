import React, { Component, PropTypes } from 'react';
import { ScrollView, View, TouchableHighlight, Image, Text } from 'react-native';
import TextInput from '../Shared/TextInput';
import styles from './styles';

const detailCategories = ['Color', 'Food', 'Game', 'Movie'];

export default class CreateKin extends Component {
  static navigationOptions = {
    title: 'Create Kin',
    header: { style: styles.navPrimaryBg, titleStyle: styles.navPrimaryText },
  };

  static defaultProps = {
    categories: [],
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      details: [],
    };
  }

  handleAddDetail() {
    this.props.navigation.navigate('DetailModal', {
      categories: detailCategories,
      handleSaveDetail: this.handleSaveDetail.bind(this),
    });
  }

  handleSaveDetail(detail) {
    console.log(detail);
    this.setState({
      details: this.state.details.concat([detail]),
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <TouchableHighlight>
              <Image />
            </TouchableHighlight>
          </View>

          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} placeholder="Relationship (to you)" />
            <TextInput style={styles.input} placeholder="Birth Date" />
            <View style={[styles.detailInput, { flexDirection: 'row' }]}>
              <TouchableHighlight onPress={this.handleAddDetail.bind(this)}>
                <Image
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2016/03/21/05/05/plus-1270001_1280.png',
                  }}
                  style={styles.addIcon}
                />
              </TouchableHighlight>
              <Text>Add Interest/Info</Text>
            </View>
            {this.state.details.map(detail => (
              <Text key={detail.value}>{detail.type}: {detail.value}</Text>
            ))}
          </View>
        </View>

      </ScrollView>
    );
  }
}
