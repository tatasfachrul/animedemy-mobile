/* Ini merupakan action function dimana nantinya akan di panggil di tampilan dan menetapkan data dimana ia dibutuhkan */
import axios from 'axios'

export function ALL_MOVIES() {
    return {
        type: "ALL_MOVIES",
        payload: axios.get('https://jsonplaceholder.typicode.com/posts')
    }
}

export function GET_MOVIE() {
    return {
        type: "GET_MOVIE",
        payload: {
            id: 1, title: 'beranak dalam kolam'
        }
    }
}