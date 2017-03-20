import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import CreateKin from './CreateKin';
import DetailModal from './DetailModal';
import styles from './styles';

const StackNav = StackNavigator(
  {
    Main: { screen: CreateKin },
    DetailModal: { screen: DetailModal },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default class CreateKinRoot extends Component {
  static navigationOptions = {
    title: 'Create Kin',
    header: { style: styles.navPrimaryBg, titleStyle: styles.navPrimaryText },
  };

  render() {
    return <StackNav />;
  }
}
