/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Scene, Router, Drawer} from 'react-native-router-flux'
import DrawerComp from './src/components/Drawer'
import Home from './src/containers/Home'


export default class App extends Component<{}> {
  render() {
    return (
        <Router style={styles.container}>
            <Scene key={'root'}>
                {/*默认 不隐藏导航栏 不好看*/}
                {/*<Drawer key={'Drawer'} contentComponent={DrawerComp} drawerPosition={'right'}>*/}
                    {/*<Scene key="Home" component={Home} title="首页"/>*/}
                {/*</Drawer>*/}

                {/*隐藏Drawer组件以及子视图的顶部导航栏 使用Actions.drawerOpen() ~.drawerClose()控制*/}
                <Drawer key={'Drawer'} hideNavBar={true} contentComponent={DrawerComp} drawerWidth={200} drawerPosition={'right'}>
                    <Scene key="Home" hideNavBar={true} component={Home} title="首页"/>
                </Drawer>
                {/*下面这种方法也可以*/}
                {/*<Scene drawer={true} key={'Drawer'} hideNavBar={true} contentComponent={DrawerComp} drawerPosition={'right'}>*/}
                    {/*<Scene key="Home" hideNavBar={true} component={Home} title="搜索"/>*/}
                {/*</Drawer>*/}
            </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
