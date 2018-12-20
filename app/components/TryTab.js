import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import ListEpisode from '../components/ListEpisode'
import CusCardView from '../components/CusCardView'


import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

class TryTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            episode: [{
                image: require('../assets/img/anime1.jpg'),
                episode: '80'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '79'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '78'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '77'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '76'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '75'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '74'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '73'
            },
            {
                image: require('../assets/img/anime1.jpg'),
                episode: '72'
            },
            {
                image: require('../assets/img/anime2.jpg'),
                episode: '71'
            }
            ],
            related: [{
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            },
            {
                image: require('../assets/img/baku.jpg'),
                age: '13+',
                title: 'Baku Matsu',
                star: 4.2,
                imdb: '8.0'

            }]

        }


    }

    render() {
        return (
            <ScrollableTabView
                style={{ marginLeft: 10, marginRight: 10 }}
                tabBarBackgroundColor='#1A222E'
                tabBarActiveTextColor='#00C0C1'
                tabBarInactiveTextColor='white'
                tabBarTextStyle={{ fontFamily: 'Roboto-Medium', fontSize: 14 }}
                tabBarUnderlineStyle={{ backgroundColor: '#00C0C1', borderBottomColor: '#1A222E' }}

            >
                <ScrollView tabLabel='Episodes' style={{ backgroundColor: '#1A222E' }}>
                    <View >
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {this.state.episode.map((item, key) => (
                                <ListEpisode
                                    image={item.image}
                                    episode={item.episode}
                                    key={key}
                                />
                            ))}
                        </ScrollView>
                    </View>

                </ScrollView>
                <ScrollView tabLabel='Description' style={{ backgroundColor: '#1A222E' }}>
                    <View style={{ height: 380 }}>
                        <View style={{ flex: 1, marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                The life of the shinobi is beginning to change. Boruto Uzumaki, son of Seventh Hokage Naruto Uzumaki, has enrolled in the Ninja Academy to learn the ways of the ninja. Now, as a series of mysterious events unfolds, Boruto’s story is about to begin!
                                    </Text>

                        </View>
                        <View style={{ flex: 2, borderTopWidth: 3, borderTopColor: '#00C0C1' }}>
                            <View style={{ height: 30, width: 110, backgroundColor: '#1A222E', marginTop: -15 }}>
                                <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                    Related
                                        </Text>
                            </View>
                            <View>
                                <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                                    {this.state.related.map((item, key) => (
                                        <CusCardView
                                            image={item.image}
                                            age={item.age}
                                            title={item.title}
                                            star={item.star}
                                            imdb={item.imdb}
                                            key={key}
                                        />
                                    ))}
                                </ScrollView>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </ScrollableTabView>
        )
    }
}
export default TryTab

const styles = StyleSheet.create({
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});