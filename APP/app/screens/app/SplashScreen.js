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
      url: "",
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
    console.log(this.state);
    return (
      <ScreenComponent
        back
        titleHeader="Kết quả"
        isLoading={isLoading}
        renderView={
          <>
            {CustomLabels.length == 0 && (
              <Text
                style={{ alignSelf: "center" }}
                children="Không tìm thấy lable"
              />
            )}
            {CustomLabels.map((elem, index) => {
              const { Confidence, Geometry, Name } = elem;
              const { BoundingBox } = Geometry;
              return (
                <FstImage
                  key={index}
                  source={{ uri: this.state.url }}
                  style={{ width, aspectRatio: 1 }}
                  resizeMode="stretch"
                  children={
                    <>
                      <View
                        style={{
                          borderWidth: 2,
                          width: BoundingBox.Width * width,
                          height: BoundingBox.Height * width,
                          top: BoundingBox.Top * width,
                          left: BoundingBox.Left * width
                        }}
                        children={
                          <View
                            style={{
                              position: "absolute",
                              top: -BoundingBox.Width * width * 0.7
                            }}
                          >
                            <Text
                              style={{
                                color: colors.active,
                                backgroundColor: "white"
                              }}
                              children={Confidence}
                            />
                            <Text
                              style={{
                                color: colors.active,
                                backgroundColor: "white"
                              }}
                              children={Name}
                            />
                          </View>
                        }
                      />
                    </>
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
