import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Scene } from 'react-native-router-flux';
import { Container, Header, Tabs, Tab } from 'native-base';

import TimeLineTrending from './TimeLineTrending';
import TimeLineFresh from './TimeLineFresh';

const TabIcon = ({ selected, IconName, IconType }) => {
	return (
		<Icon name={ IconName } type={ IconType }/>
	)
} 

class TimeLine extends React.Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading="Trending">
                        <TimeLineTrending />
                    </Tab>
                    <Tab heading="Fresh">
                        <TimeLineFresh />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps) (TimeLine);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
