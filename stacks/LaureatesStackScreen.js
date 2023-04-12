import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import out screens
import LaureatesHomeScreen from '../screens/Laureates/LaureatesHomeScreen';


const LaureatesStack = createNativeStackNavigator();

function LaureatesStackScreen() {
    return ( 
    <LaureatesStack.Navigator>
        <LaureatesStack.Screen name="LaureatesHome" component={LaureatesHomeScreen} /> 
    </LaureatesStack.Navigator>
        );
    }
    
    export default LaureatesStackScreen;
