import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, RefreshControl } from 'react-native'
import { Container, Header, Left, Body, Right, Icon, Content, Drawer } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

import Slide from '../components/Swiper'
import CusCardView from '../components/CusCardView'
import { ALL_VIDEOS, POPULAR } from '../actions/video'
import { connect } from 'react-redux'
import SideMenu from '../components/SideMenu'

class DirectoryScreen extends Component {

    componentDidMount() {
        this.props.dispatch(ALL_VIDEOS())
        this.props.dispatch(POPULAR())
    }

    constructor(props) {
        super(props)
        this.state = {
            Best: [{
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

            }
            ],
            refreshing: false,
        }
    }


    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.props.dispatch(ALL_VIDEOS())
        this.props.dispatch(POPULAR())
        this.setState({ refreshing: false })
    }


    allVideos = () => {
        if (this.props.video.isLoading) {
            return <Text style={{ color: 'white' }}>Loading</Text>
        } else if (this.props.video.isError) {
            return <Text style={{ color: 'white' }}>Server Tidak Dapat DiJaungkau</Text>
        } else {
            return this.props.video.results.map((item) => (
                <CusCardView {...this.props}
                    image={item.image}
                    age={item.age_restriction}
                    title={item.title}
                    star={item.imdb_score}
                    imdb={item.imdb_score}
                    key={item.id}
                    id={item.id}
                />
            ))
        }
    }

    popular = () => {
        if (this.props.popular.isLoading) {
            return <Text style={{ color: 'white' }}>Loading</Text>
        } else if (this.props.popular.isError) {
            return <Text style={{ color: 'white' }}>Server Tidak Dapat DiJaungkau</Text>
        } else {
            return this.props.popular.results.map((item) => (
                <CusCardView {...this.props}
                    image={item.image}
                    age={item.age_restriction}
                    title={item.title}
                    star={item.imdb_score}
                    imdb={item.imdb_score}
                    key={item.id}
                    id={item.id}
                />
            ))
        }
    }

    closeDrawer = () => {
        this.drawer._root.close()
    }

    openDrawer = () => {
        this.drawer._root.open()
    }

    render() {
        // {this.props.video.isLoading || alert(JSON.stringify(this.props.video))}
        return (



            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideMenu {...this.props} />}
                onClose={() => this.closeDrawer()}
                type='displace'
            >


                <Container>



                    <LinearGradient colors={['#010101', '#1A222E']} style={styles.linearGradient}>
                        <Header style={{ backgroundColor: '#010101' }}>
                            <Left style={{ flex: 1, marginLeft: 5 }}>
                                <Icon name='md-menu' style={{ color: 'white' }} onPress={() => this.drawer._root.open()} />
                            </Left>
                            <Body style={{ flex: 8, alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: 'white' }}>
                                    Discovery
                                </Text>
                            </Body>
                            <Right style={{ flex: 1, marginRight: 5 }}>
                                <Icon onPress={() => this.props.navigation.navigate('Search')} name='md-search' style={{ color: 'white' }} />
                            </Right>
                        </Header>

                        <Content>
                            <ScrollView
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh}
                                    />
                                }
                            >
                                <Slide />
                                <View>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                            New Release
                                    </Text>

                                    </View>
                                    <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                                        {this.allVideos()}
                                    </ScrollView>

                                </View>

                                <View>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                                        <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 18, color: '#00C0C1' }}>
                                            Best Popular
                                    </Text>

                                    </View>
                                    <ScrollView horizontal style={{ marginLeft: 20, marginTop: 10, marginBottom: 10 }} showsHorizontalScrollIndicator={false}>
                                        {this.popular()}
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </Content>

                    </LinearGradient>

                </Container>



            </Drawer>


        )
    }
}

const mapStateToProps = (state) => ({
    video: state.videoReducers,
    popular: state.popularReducers
})

export default connect(mapStateToProps)(DirectoryScreen)

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    }
})