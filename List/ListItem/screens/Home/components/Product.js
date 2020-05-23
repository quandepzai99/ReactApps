import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import colors from "../../../colors";

const item_image_1 = require('../../../assets/sanpham1.png');
const item_image_2 = require('../../../assets/sanpham2.png');
const item_image_3 = require('../../../assets/sanpham2.png');
const item_image_4 = require('../../../assets/sanpham2.png');

const plus = require('../../../assets/plus.png');

const ProductItem = ({image, name, price}) => (
  <TouchableOpacity style={styles.frame}>
    <Image source={image} style={{top: 17}}/>
    <Text style={styles.tayCmMicrosoftXboxOneSMu}>{name}</Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={styles.layer}>{price}</Text>
      <View style={styles.plus}>
        <Image source={plus} />
      </View>
    </View>
  </TouchableOpacity>
)



export default class Product extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.muaSmViUrBox}>Mua sắm với UrBox</Text>
          <Text style={styles.xemTtC}>Xem tất cả</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.itemContainer}>
            {[
              {image1: item_image_1, image2: item_image_2},
              {image1: item_image_2, image2: item_image_3},
              {image1: item_image_4, image2: item_image_1},
              {image1: item_image_1, image2: item_image_2},
              {image1: item_image_1, image2: item_image_2},
              {image1: item_image_1, image2: item_image_2},
            ].map((e, index) => (
              <View key={index.toString()}>
                <ProductItem
                  name="Tay Cầm Microsoft Xbox One S (Màu…"
                  image={e.image1}
                  price="1.500.000đ"
                />

              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
    marginTop: 10
  },
  muaSmViUrBox: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet
  },
  xemTtC: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "right",
    top: 5,
    color: colors.deepSkyBlue
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 10,

  },
  frame: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 174,
    height: 264,
    borderRadius: 12,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(22, 60, 132, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation: 3
   },
  tayCmMicrosoftXboxOneSMu: {
    fontFamily: "Roboto",
    fontSize: 15,
    left: 12,
    paddingRight: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.greyishBrown
  },
  layer: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    color: colors.velvet
  },
  plus: {
    alignItems: 'center',
    backgroundColor: colors.tangerine,
    width: 36,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    left: 27
  }
})
