import React, { Component } from 'react';
import CreateKinComponent from './render';
import navStyles from '../../Shared/NavBar/style';

export default class CreateKin extends Component {
    static navigationOptions = {
        header: { styles: navStyles.navPrimaryBg, titleStyle: navStyles.navPrimaryText }
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            detailCount: 1
        };
    }

    onAddDetail() {
        this.setState({
            detailCount: this.state.detailCount + 1
        });
    }

    render() {
        return (
            <CreateKinComponent
                detailCount={this.state.detailCount}
                onAddDetail={this.onAddDetail.bind(this)}
                detailCategories={['Color', 'Food', 'Game', 'Movie']}
            />
        );
    }
}
