import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class TimeLineFresh extends React.Component {
    render() {
        console.log('ee', this.props.loggedIn)
        return (
        <View style={styles.container}>
            <Text>this is time line fresh Component</Text>
        </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
});

export default connect(mapStateToProps) (TimeLineFresh);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
