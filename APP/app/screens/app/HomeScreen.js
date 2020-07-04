import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const HomeScreen = props => <Text children={"ahihih"} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
