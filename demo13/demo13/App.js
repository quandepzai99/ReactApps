import React, {Component} from 'react';
import {SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styled from 'styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class App extends Component {
  render() {
    const recipes = [
      {
        name: 'pad thai',
        info: '45 min | 2 servings',
        image: require('./assets/food1.jpg'),
      },
      {
        name: 'Seared scallops with romesco sauce',
        info: '20 min | 4 servings',
        image: require('./assets/food2.jpg'),
      },
      {
        name: 'Grilled chicken with lemon butter',
        info: '60 min | 2 servings',
        image: require('./assets/food3.jpg'),
      },
    ];
    return (
      <ScrollView>
        <Container>
          <StatusBar barStyle="light-content" />
          <RecipeBackground source={require('./assets/banner.jpg')}>
            <SafeAreaView>
              <MenuBar>
                <Back>
                  <AntDesign name={'arrowleft'} size={24} color={'#fff'} />
                  <Text style={{marginLeft: 10}}>Ingredients</Text>
                </Back>
                <AntDesign name={'heart'} size={24} color={'#fff'} />
              </MenuBar>
              <MainRecipe>
                <Text title heavy>
                  Spicy Shrimp
                </Text>
                <Divider />
                <Text bold>80 calories per 100g</Text>
                <Text>3g | 10g protein | 80g carbs</Text>
              </MainRecipe>
              <Button>
                <Text heavy small>
                  Learn More
                </Text>
              </Button>
            </SafeAreaView>
          </RecipeBackground>
          <RecipesContainer>
            <Text dark heavy large>
              Recipes
            </Text>
            <Text small dark>
              18 recipes available
            </Text>
            <Recipes>
              {recipes.map((recipe, index) => {
                return (
                  <Recipe key={index}>
                    <RecipeImage source={recipe.image} />
                    <RecipeInfo>
                      <Text dark bold>
                        {recipe.name}
                      </Text>
                      <Text dark small>
                        {recipe.info}
                      </Text>
                    </RecipeInfo>
                    <AntDesign name={'hearto'} size={18} color={'#000'} />
                  </Recipe>
                );
              })}
            </Recipes>
          </RecipesContainer>
        </Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  font-family: 'AvenirNext-Regular';

  ${({title, large, small}) => {
    switch (true) {
      case title:
        return 'font-size: 32px';
      case large:
        return 'font-size: 20px';
      case small:
        return 'font-size: 13px';
    }
  }}

  ${({bold, heavy}) => {
    switch (true) {
      case bold:
        return 'font-weight: 600';
      case heavy:
        return 'font-weight: 700';
    }
  }}
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.3);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

const RecipesContainer = styled.View`
  margin-top: -30px;
  padding: 32px;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Recipes = styled.View`
  margin-top: 16px;
`;

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const RecipeImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const RecipeInfo = styled.View`
  flex: 1;
  margin-left: 12px;
`;
