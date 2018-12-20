/* Ini merupakan action function dimana nantinya akan di panggil di tampilan dan menetapkan data dimana ia dibutuhkan */
import axios from 'axios'
//headers: {'Authorization': "bearer " + token}
import deviceStorage from '../data/deviceStorage'

var config = {
    headers: { 'Authorization': "Bearer " + deviceStorage.getKey() }
}

export function ALL_VIDEOS() {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get('http://192.168.1.116:3333/api/v1/videos',
            config
        ),
    }
}

export function GET_VIDEO(id) {
    return {
        type: "GET_VIDEO",
        payload: axios.get(`http://192.168.1.116:3333/api/v1/video/${id}`,
            config
        )
    }
}

export function SEARCH(text) {
    return {
        type: "ALL_VIDEOS",
        payload: axios.get(`http://192.168.1.116:3333/api/v1/videos/search?search=${text}`,
            config
        )
    }
}

export function POPULAR() {
    return {
        type: "POPULAR",
        payload: axios.get('http://192.168.1.116:3333/api/v1/videos/popular',
            config
        ),
    }
}

export function DETAIL_VIDEO(id) {
    return {
        type: "DETAIL_VIDEO",
        payload: axios.get(`http://192.168.1.116:3333/api/v1/video/${id}`,
            config
        )
    }
}