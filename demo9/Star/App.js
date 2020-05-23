import React, {Component} from 'react';
import {StyleSheet,View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarButtonPress(rating){
    this.setState({
      starCount: rating
    })
  }
  render() {

    return (
      <View style={styles.container}>

        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarButtonPress(rating)}
          fullStarColor={'red'}>

        </StarRating>

      </View>
    );
  }
}

// class App extends React.Component{
//   render() {
//     return <Icon name="star" color="blue" size={32} style={{marginHorizontal: 6}}>;
//   }
// }

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

