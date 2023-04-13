import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import out screens
import LaureatesHomeScreen from '../screens/Laureates/LaureatesHomeScreen';
import LaureatesDetailsScreen from '../screens/Laureates/LaureatesDetailsScreen';


const LaureatesStack = createNativeStackNavigator();

function LaureatesStackScreen() {
    return ( 
    <LaureatesStack.Navigator>
        <LaureatesStack.Screen name="LaureatesHome" component={LaureatesHomeScreen} /> 
        <LaureatesStack.Screen name="LaureatesDetails" component={LaureatesDetailsScreen} /> 
    </LaureatesStack.Navigator>
        );
    }
    
    export default LaureatesStackScreen;
