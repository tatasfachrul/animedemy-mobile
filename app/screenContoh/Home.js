import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ALL_VIDEOS } from '../actions/video';
import { connect } from 'react-redux'

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(ALL_VIDEOS())
    }

    render() {
        // this.props.video.isLoading || alert(JSON.stringify(this.props.video.results.data))
        return (
            <View>
                {this.props.isLoading ? (<Text>Loading</Text>) : this.props.video.results.map(
                    (data) => {
                        return (
                            <Text key={data.id}>
                                {data.title}
                            </Text>
                        )
                    }
                )}
                {/* <Text> Ini Adalah Beranda {this.props.navigation.getParam('id', 'nodata')} </Text> */}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    video: state.videoReducers,
    isLoading: state.videoReducers.isLoading
})

export default connect(mapStateToProps)(Home)