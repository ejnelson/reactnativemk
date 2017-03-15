import React from 'react';
import { Navigator, View, Text } from 'react-native';
import AddButton from './AddButton';
import BackButton from './BackButton';
import styles from '../../styles';

/**
 * Main Navigation bar component. Maps colors and buttons based on depth of the navigation stack.
 * @param {*} props
 */
function NavBar(props) {
    const NavBarRouteMapper = {
        LeftButton: (route, navigator, index, navState) => {
            if (navState.routeStack.length > 1) {
                return <BackButton onPress={() => navigator.pop()} />;
            }
            return <AddButton onPress={() => navigator.push(props.createRoute)} />;
        },
        RightButton: () => null,
        Title: (route, navigator, index, navState) => (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    style={[
                        {
                            fontSize: 16,
                            fontWeight: 'bold'
                        },
                        navState.routeStack.length > 1 ? styles.white : styles.primary
                    ]}
                >
                    {navState.routeStack[navState.routeStack.length - 1].title}
                </Text>
            </View>
        )
    };

    return (
        <Navigator.NavigationBar
            routeMapper={NavBarRouteMapper}
            {...props}
            style={props.navState.routeStack.length > 1 ? styles.primaryBg : styles.whiteBg}
        />
    );
}

NavBar.propTypes = {
    navState: React.PropTypes.shape({
        routeStack: React.PropTypes.array.isRequired
    }),
    createRoute: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    }).isRequired
};

NavBar.defaultProps = {
    navState: { routeStack: [] }
};

export default NavBar;
