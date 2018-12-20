import { createStackNavigator, createAppContainer } from 'react-navigation'
import { LoginScreen, RegisterScreen, DirectoryScreen, SplashScreen,MovieScreen,SearchScreen,CategoryScreen } from './app/screens'
import Login from './app/screenContoh/Login'
import Home from './app/screenContoh/Home'
import CusCardView from './app/components/CusCardView'
import deviceStorage from './app/data/deviceStorage'

const App = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null
            }
        },
        Directory: {
            screen: DirectoryScreen,
            navigationOptions: {
                header: null
            }
        },
        Splash: {
            screen: SplashScreen, navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Contoh: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Movie:{
            screen:MovieScreen,
            navigationOptions:{
                header:null
            }
        },
        Search:{
            screen:SearchScreen,
            navigationOptions:{
                header:null
            }
        },
        Category:{
            screen:CategoryScreen,
            navigationOptions:{
                header:null
            }
        },
        CusView: {
            screen: CusCardView
        }
    },
    {
        // (deviceStorage.getKey ? 'Directory' : 'Login')
        initialRouteName: 'Directory'
    }
)

export default createAppContainer(App)