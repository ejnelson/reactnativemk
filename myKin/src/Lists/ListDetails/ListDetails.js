import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListRow from '../../Shared/ListRow/ListRow';
import styles from '../styles';
import navStyles from '../../Shared/NavBar/style';

export default class ListDetails extends Component {
    static navigationOptions = {
        title: ({ state }) => `${state.params.for.firstName}'s List`,
        header: { style: navStyles.navBarBlue, titleStyle: navStyles.navBarBlue }
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

    renderRow(rowData) {
        return <ListRow heading={rowData.name} subHeading={''} details={''} />;
    }

    render() {
        return (
            <ListView
                removeClippedSubviews={false}
                style={[styles.container]}
                contentInset={{ bottom: 49 }}
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

ListDetails.propTypes = {
    navigation: React.PropTypes.shape({
        state: React.PropTypes.shape({
            params: React.PropTypes.shape({
                items: React.PropTypes.array.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};
