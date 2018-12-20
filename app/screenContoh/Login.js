import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { GET_VIDEO, ALL_VIDEOS } from '../actions/video';
import Video from 'react-native-video'
import { Container, Icon, Button } from 'native-base'
import Orientation from 'react-native-orientation'

class Login extends Component {

    state = {
        pause: true,
        fullscreen: false
    }

    componentDidMount() {
        this.props.dispatch(ALL_VIDEOS())
        Orientation.lockToPortrait()
    }

    listVideo = () => {
        if (this.props.video.isLoading) {
            return <Text>Loading</Text>
        } else if (this.props.video.isError) {
            return <Text>Tidak Ada Koneksi Internet</Text>
        } else {
            return this.props.video.results.map(
                (data) => {
                    return (
                        <TouchableOpacity key={data.id} onPress={() => this.props.navigation.navigate('Home', {
                            id: data.id
                        })}>
                            <Text>{data.title}</Text>
                        </TouchableOpacity>
                    )
                }
            )
        }
    }

    fullscreen = () => {
        this.setState({ fullscreen: !this.state.fullscreen })
        if (!this.state.fullscreen) {
            Orientation.lockToLandscape()
        } else {
            Orientation.lockToPortrait()
        }

    }

    Buffer = () => {
        return (
            <Text> Loading </Text>
        )
    }

    onError = () => {
        return (
            <Text>Kesalahan</Text>
        )
    }

    press = () => this.setState({ pause: !this.state.pause })

    controlButton = () => {
        if (this.state.pause) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Icon name='skip-backward' style={{ color: 'white', marginHorizontal: 50, marginTop: 40 }} />

                        <Icon onPress={this.press} name='play' style={{ color: 'white', marginHorizontal: 50, marginTop: 40 }} />

                        <Icon name='skip-forward' style={{ color: 'white', marginHorizontal: 50, marginTop: 40 }} />
                    </View>
                    <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', margin: 10, }}>
                        <Icon style={{ color: 'white' }} name={this.state.fullscreen ? "phone-portrait" : "phone-landscape" } onPress={this.fullscreen} />
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <Container>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} onPress={this.press}>
                    <Video source={{ uri: "https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8" }}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}
                        poster={"http://cdn56.picsart.com/175939569000202.gif"}      
                        posterResizeMode={'cover'}                                // Store reference
                        onBuffer={this.Buffer}                // Callback when remote video is buffering
                        onError={this.videoError}
                        fullscreen={this.state.fullscreen}
                        resizeMode={"stretch"}
                        paused={this.state.pause}
                        // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                    />
                    {this.controlButton()}
                </TouchableOpacity>
                {this.state.fullscreen || (<View style={{ flex: 2 }}></View>)
                }
                {/* {this.listVideo()} */}
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: null,
        height: null
    },
})

const mapStateToProps = (state) => ({
    video: state.videoReducers,
})

export default connect(mapStateToProps)(Login)