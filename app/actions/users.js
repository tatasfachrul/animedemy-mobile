import axios from 'axios'

export function LOGIN() {
    return {
        type: "LOGIN",
        payload: {
            email: 'Admin',
            password: 'Admin'
        }
    }
}