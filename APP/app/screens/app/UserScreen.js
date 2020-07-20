import React from "react";
import { connect } from "react-redux";
import ScreenComponent from "@app/components/ScreenComponent";
import { Image, Text, TouchableOpacity } from "react-native";
import R from "@R";

const UserScreen = props => {
  return (
    <ScreenComponent
      titleHeader={"UserScreen"}
      back={false}
      rightComponent={<Text children={"hihi"} />}
      renderView={
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={R.images.ic_user}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      }
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen);
