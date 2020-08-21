import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import R from "@R";
import { connect } from "react-redux";
import { navigateSwith } from "@app/redux/actions";
import callAPI from "@app/utils/CallApiHelper";
import { getImage } from "@app/constants/Api";
import FstImage from "@app/components/FstImage";
import { colors } from "@app/constants/Theme";
import ScreenComponent from "@app/components/ScreenComponent";
import NavigationUtil from "@app/navigation/NavigationUtil";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      url: props.route.params.url,
      CustomLabels: []
    };
  }

  componentDidMount() {
    callAPI({
      API: getImage,
      payload: this.props.route.params,
      onSuccess: res => {
        this.setState(res);
      },
      typeLoading: "isLoading",
      onError: err => {
        NavigationUtil.goBack();
      },
      context: this
    });
  }

  render() {
    const { CustomLabels, isLoading } = this.state;
    return (
      <ScreenComponent
        back
        titleHeader="Kết quả"
        isLoading={isLoading}
        renderView={
          <>
            <FstImage
              source={{ uri: this.props.route.params.url }}
              style={{ width, aspectRatio: 1, position: "absolute" }}
              resizeMode="stretch"
            />
            {CustomLabels.map((elem, index) => {
              const { Confidence, Geometry, Name } = elem;
              const { BoundingBox } = Geometry;
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 3,
                    width: BoundingBox.Width * width,
                    height: BoundingBox.Height * width,
                    top: BoundingBox.Top * width,
                    left: BoundingBox.Left * width,
                    position: "absolute"
                  }}
                  children={
                    <View
                      style={{
                        position: "absolute",
                        top: -BoundingBox.Width * width * 0.7,
                        width,
                        zIndex: 2
                      }}
                    >
                      <Text
                        style={{
                          color: colors.white
                        }}
                        children={Confidence}
                      />
                      <Text
                        style={{
                          color: colors.white
                        }}
                        children={Name}
                      />
                    </View>
                  }
                />
              );
            })}
          </>
        }
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  navigateSwith
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
