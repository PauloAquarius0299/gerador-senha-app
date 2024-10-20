import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShow: false,
                    tabBarIcon: ({focused, size, color, name='home'}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='home-outline' />
                        }
                    }
                }}
            />
            <Tab.Screen 
                name='Passwords'
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShow: false,
                    tabBarIcon: ({focused, size, color, name='lock-closed'}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='lock-closed-outline' />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    );
}
