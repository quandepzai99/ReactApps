import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Modal} from 'react-native'
import colors from "./Colors";
// import tempData from "./tempData";
import AntDesign from 'react-native-vector-icons/AntDesign'
import TodoList from './components/TodoList'
import AddListModal from "./components/AddListModal";
import Fire from "./Fire";


export default class App extends Component {
  state = {
    addTodoVisible: false,
    list: [],
    user: {},
    loading: true
  };
  componentDidMount() {
    firebase = new Fire((error, user) => {
      if (error) {
        return alert('Uh oh, something went wrong')
      }
      firebase.getLists(list => {
        this.setState({list, user}, () => {
          this.setState({loading: false})
        })
      })
      this.setState({ user })
    });

  }

  toggleAddTodoModal() {
    this.setState({addTodoVisible: !this.state.addTodoVisible});
  };
  renderList = list => {
    return<TodoList list={list} updateList={this.updateList}/>
  };
  addList = list => {
    this.setState({list: [...this.state.list, {...list, id: this.state.list.length + 1, todos: [] }]})
  };
  updateList = list => {
    this.setState({
      list: this.state.list.map(item => {
        return item.id === list.id ? list : item;
      })
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal closeModal={() => this.toggleAddTodoModal()} addList={this.addList}/>
        </Modal>
        <View>
          <Text>User: {this.state.user.uid}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo <Text style={{fontWeight: '200', color: colors.blue}}>List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name={'plus'} size={16} color={colors.blue}/>
          </TouchableOpacity>
          <Text style={styles.add}>Add List</Text>
        </View>
        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={this.state.list}
            keyExtractor={item => item.name}
            horizontal={true}
            showHorizontalScrollIndicator={false}
            renderItem={({item}) => this.renderList(item)}
            keybroardShouldPersisTaps={'always'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8
  }
})


