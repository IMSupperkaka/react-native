import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, RefreshControl } from 'react-native'

class Greeting extends Component {
    render() {
        return (
          <Text>Hello {this.props.name}</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
        setInterval(() =>{
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            })
        },1000)
    }
    render() {
        return (
            <Text style={this.props.style}>{this.state.showText ? this.props.text : ' '}</Text>
        );
    }
}

class PizzaTranslator extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={{padding: 10,width: '80%'}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="type here to translate" 
                    onChangeText={(text)=>this.setState({text})}
                />
                <Text style={{fontSize: 24}}>{this.state.text.split(' ').map((word)=>word && '🍕').join('')}</Text>
            </View>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRefreshing: false
        }
        this._onRefresh = this._onRefresh.bind(this);
    }
    render() {
        return (
            <ScrollView 
                refreshControl={<RefreshControl 
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh}
                    tintColor="#ff0000"
                    title="Loading..."
                    colors={['#000', '#00ff00', '#0000ff']}
                />}
                style={{backgroundColor: '#3b3738',flex:1}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize:30,color: '#fff'}}>Scroll me plz</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:30,color: '#fff'}}>If you like</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:30,color: '#fff'}}>Scrolling down</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:30,color: '#fff'}}>What's the best</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:30,color: '#fff'}}>Framework around?</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:30,color: '#fff'}}>React Native</Text>
                </View>
            </ScrollView>
        );
    }
    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
              isRefreshing: false
            });
        }, 5000);
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <IScrolledDownAndWhatHappenedNextShockedMe/>
        );
    }
}

const styles = StyleSheet.create({
  red:{
      color: 'red'
  },
  bold: {
      fontWeight: 'bold'
  },
  bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
  }
})