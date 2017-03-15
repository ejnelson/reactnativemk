import React from 'react';
import { TabBarIOS, View, Text } from 'react-native';
import Kin from './Kin';
import Lists from './Lists';

function Main(props) {
    return (
        <TabBarIOS>
            <TabBarIOS.Item
                title="My Kin"
                selected={props.selectedTab === 'kin'}
                onPress={() => props.navigate('kin')}
            >
                <Kin {...props} />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Lists"
                selected={props.selectedTab === 'lists'}
                onPress={() => props.navigate('lists')}
            >
                <Lists {...props} />
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Events"
                selected={props.selectedTab === 'events'}
                onPress={() => props.navigate('events')}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Events Here</Text>
                </View>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Notifications"
                selected={props.selectedTab === 'notifications'}
                onPress={() => props.navigate('notifications')}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Notifications Here</Text>
                </View>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Settings"
                selected={props.selectedTab === 'settings'}
                onPress={() => props.navigate('settings')}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Settings Here</Text>
                </View>
            </TabBarIOS.Item>
        </TabBarIOS>
    );
}

Main.propTypes = {
    selectedTab: React.PropTypes.string.isRequired,
    navigate: React.PropTypes.func.isRequired
};

export default Main;
