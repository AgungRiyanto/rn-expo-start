import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class TimeLineTrending extends React.Component {
    render() {
        console.log('ee', this.props.loggedIn)
        return (
        <View style={styles.container}>
            <Text>this is time line trending Component</Text>
        </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps) (TimeLineTrending);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
