import React, { Component, PropTypes } from 'react';
import { ListView, View, Text, TouchableHighlight } from 'react-native';
import ListRow from '../Shared/ListRow/ListRow';
import navStyles from '../Shared/NavBar/style';

export default class ListDetails extends Component {
    static navigationOptions = {
        title: ({ state }) => `${state.params.for.name}'s List`,
        header: { style: navStyles.navPrimaryBg, titleStyle: navStyles.navPrimaryText }
    };

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        const { items } = props.navigation.state.params;
        this.state = {
            dataSource: ds.cloneWithRows(items)
        };
    }

    componentWillReceiveProps(newProps) {
        const { items } = newProps.navigation.state.params;
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
        });
    }

    renderRightButton(item) {
        if (item.claimedBy) {
            return (
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            borderRadius: 20,
                            padding: 8
                        },
                        navStyles.navPrimaryBg
                    ]}
                >
                    <TouchableHighlight>
                        <Text style={{ color: '#fff', fontSize: 12 }}>Added</Text>
                    </TouchableHighlight>
                </View>
            );
        }
        return (
            <View
                style={{
                    justifyContent: 'center',
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: '#D0CCCC'
                }}
            >
                <TouchableHighlight onPress={() => this.props.screenProps.onClaimItem(item)}>
                    <Text style={{ fontSize: 12, color: '#D0CCCC', padding: 8 }}>
                        Shopping List
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderRow(rowData) {
        return (
            <ListRow
                heading={rowData.name}
                subHeading={''}
                details={''}
                rightButton={this.renderRightButton(rowData)}
            />
        );
    }

    render() {
        return (
            <ListView
                removeClippedSubviews={false}
                style={{ flex: 1, backgroundColor: '#fff' }}
                contentInset={{ bottom: 49 }}
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

ListDetails.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                items: PropTypes.array.isRequired
            }).isRequired
        }).isRequired
    }).isRequired,
    screenProps: PropTypes.shape({
        onClaimItem: PropTypes.func.isRequired
    }).isRequired
};
