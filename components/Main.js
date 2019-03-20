import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {getMainWeather} from '../actions/weatherActions'

class Main extends Component {
    constructor(){
        super();
        this.state = {
            weather:[]
        }
    }

    componentWillMount() {
        this.props.getMainWeather();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({weather:nextProps.weather})
    }

    renderCards(item) {
        if (item.item.data){
            return (
                <View key={item.item.data[0].city_name} style={{width: '50%'}}>
                    <Card
                        title={`${item.item.data[0].city_name}`}
                        image={require('../images/ashgabat.jpg')}>
                        <Text style={{marginBottom: 10}}>
                            {item.item.data[0].temp}C
                        </Text>
                    </Card>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                {/*<Input*/}
                    {/*containerStyle={{marginTop:20}}*/}
                    {/*placeholder='INPUT WITH ICON'*/}
                    {/*leftIcon={{ type: 'font-awesome', name: 'search' }}*/}
                {/*/>*/}
                <FlatList numColumns="2" extraData={this.props} data={this.props.weather.weather} renderItem={item => this.renderCards(item)}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    weather: state.weather
});

export default connect(mapStateToProps, {getMainWeather})(Main)