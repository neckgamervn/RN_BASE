import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class UserScreen extends Component {
  render() {
    return (
      <View>
        <Text> UserScreen </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);
