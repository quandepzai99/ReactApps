import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import colors from "../../../colors";
import images from "../../../Common/images";

const ProductItem = ({image, name, price}) => (
  <TouchableOpacity style={styles.frame}>
    <Image source={image}/>
    <Text style={styles.tayCmMicrosoftXboxOneSMu}>{name}</Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={styles.layer}>{price}</Text>
      <View style={styles.plus}>
        <Image source={images.plus} />
      </View>
    </View>
  </TouchableOpacity>
)

export default class Product extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.muaSmViUrBox}>Làm đẹp - Sức khỏe</Text>
          <Text style={styles.xemTtC}>Xem thêm</Text>
        </View>
        <ScrollView horizontal={true} style={{height: 270}}>
          <View style={styles.itemContainer}>
            {[
              {image1: images.product1},
              {image1: images.product2},
              {image1: images.product3},
              {image1: images.product1},
              {image1: images.product1},
              {image1: images.product1},
            ].map((e, index) => (
              <View key={index.toString()}>
                <ProductItem
                  name="Chân Váy Nữ Phối Nẹp Nút Gumac…"
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
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
    marginTop: 22
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
    elevation: 5
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 10,
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
