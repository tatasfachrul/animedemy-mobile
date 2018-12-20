import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


class ListEpisode extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', height: 80, width: '100%', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={this.props.image} style={{ height: 60, width: 100 }} />
                </View>
                <View style={{ flex: 6, flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, color: 'white' }}>
                        Episode
                                    </Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 14, marginLeft: 5, color: 'white' }}>
                        {this.props.episode}
                    </Text>
                </View>

            </View>
        )
    }
}

export default ListEpisode