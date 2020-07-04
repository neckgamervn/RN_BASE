import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import RNText from "@app/components/RNText";

const HomeScreen = props => <RNText text="Xin chao" />;

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
