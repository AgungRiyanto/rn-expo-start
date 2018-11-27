import React from 'react';
import { Platform, StatusBar, View, StyleSheet, AsyncStorage } from 'react-native';
import { Root, Icon } from 'native-base';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/';
import { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Foundation, Entypo } from '@expo/vector-icons';
import { Router, Scene } from 'react-native-router-flux';

// import screens 
import Home from './screens/Home';

export let store = compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate()
  )(createStore)(reducers);

persistStore(store, { storage: AsyncStorage });

const TabIcon = ({ selected, IconName, IconType }) => {
	return (
		<Icon name={ IconName } type={ IconType }/>
	)
} 

export default class App extends React.Component {
	render() {
		return (
			<Provider store={ store }>
				<View style={styles.container}>
					{ Platform.OS === 'ios' && <View style={styles.statusBarBackground } />}
					{ Platform.OS === 'android' && <View style={styles.statusBarUnderlay } />}
					<Root>
						<StatusBar
							backgroundColor={'#fff'}
							barStyle='light-content'
							translucent={false}
						/>
						<Router>
							<Scene key="root">
								<Scene key="tabbar" tabs hideNavBar>
									<Scene key="home" component={ Home } initial IconName="home" IconType="Entypo" icon={ TabIcon } hideNavBar/>
								</Scene>
							</Scene>
						</Router>
					</Root>
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	statusBarBackground: {
		height: (Platform.OS === 'ios') ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
	},
	statusBarUnderlay: {
		height: 24,
		backgroundColor: 'rgba(0,0,0,0.2)',
	},
});
