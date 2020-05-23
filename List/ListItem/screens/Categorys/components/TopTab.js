import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import colors from "../../../colors";

export default class TopTab extends Component {
  render() {

    return (
      <View>
        <ScrollView horizontal={true}>
          <View style={styles.filterContainer}>
            {[
              'Làm đẹp - sức khỏe',
              'Phụ kiện - thiết bị số',
              'Hàng tiêu dùng',
              'Điện thoại',
            ].map((e, index) => (
              <View
                key={index.toString()}
                style={
                  index === 0
                    ? styles.filterActiveButtonContainer
                    : styles.filterInactiveButtonContainer
                }>
                <Text
                  style={
                    index === 0
                      ? styles.filterActiveText
                      : styles.filterInactiveText
                  }>
                  {e}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  filterInactiveButtonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  filterActiveText: {
    color: colors.velvet,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
  },
  filterInactiveText: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.blueyGrey
  },
})
