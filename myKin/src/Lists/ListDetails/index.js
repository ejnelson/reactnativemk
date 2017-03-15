import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListRow from '../../Shared/ListRow';
import styles from '../styles';

export default class ListDetails extends Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.items)
        };
    }

    componentWillReceiveProps() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.items)
        });
    }

    renderRow(rowData) {
        return <ListRow heading={rowData.name} subHeading={''} details={''} />;
    }

    render() {
        return (
            <ListView
                style={styles.container}
                contentInset={{ bottom: 49 }}
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

ListDetails.propTypes = {
    items: React.PropTypes.array.isRequired
};
