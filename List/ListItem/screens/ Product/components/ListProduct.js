import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from "../../../colors";

const item_image_1 = require('../../../assets/image_Product.jpg');
const item_image_2 = require('../../../assets/image_Product2.png');
const item_image_3 = require('../../../assets/image_Product3.jpg');
const item_image_4 = require('../../../assets/image_produc4.jpg');

const plus = require('../../../assets/plus.png');

// const {width} = Dimensions.get('window');

const ProductItem = ({image, name, price}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={image} />
      <Text style={styles.itemName}>{name}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.itemPrice}>{price}</Text>
        <View style={styles.plus}>
          <Image source={plus} />
        </View>
      </View>
    </TouchableOpacity>

);

export default class ListProduct extends Component {
  render() {
    return (
        <View style={styles.listItemContainer}>
          {[
            {image1: item_image_1, image2: item_image_2},
            {image1: item_image_2, image2: item_image_3},
            {image1: item_image_4, image2: item_image_4},
            {image1: item_image_1, image2: item_image_3},

          ].map((e, index) => (
            <View key={index.toString()}>
              <ProductItem
                name="Điện thoại Vsmart Bee"
                image={e.image1}
                price="699.000đ"
              />
              <ProductItem
                name="Điện thoại Vsmart Bee"
                image={e.image2}
                price="699.000đ"
              />
              <ProductItem
                name="Điện thoại Vsmart Bee"
                image={e.image1}
                price="699.000đ"
              />
            </View>

          ))}
        </View>

    );
  }
}

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemContainer: {
    marginLeft: 5,
    marginRight: 12,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemName: {
    fontSize: 17  ,
    color: colors.greyishBrown,
    marginLeft: 12,
    fontWeight: '200'
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.velvet,
    marginTop: 15,
    marginLeft: 12
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

  }
})
