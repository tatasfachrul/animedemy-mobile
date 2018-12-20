import { AsyncStorage } from 'react-native'

const deviceStorage = {

    async saveKey(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            if (value != null) {
                this.setState({
                    bearer: value,
                    isLoading: false
                })
            } else {
                this.setState({
                    isLoading: false
                })
            }
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getKey() {
        try {
            userId = await AsyncStorage.getItem('id_token') || 'none'
        } catch (error) {
            alert(error.message)
        }
        return userId
    }
}

export default deviceStorage