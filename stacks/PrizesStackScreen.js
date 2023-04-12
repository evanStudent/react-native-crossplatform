import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import out screens
import PrizesHomeScreen from '../screens/Prizes/PrizesHomeScreen';


const PrizesStack = createNativeStackNavigator();

function PrizesStackScreen() {
    return ( 
    <PrizesStack.Navigator>
        <PrizesStack.Screen name="PrizesHome" component={PrizesHomeScreen} /> 
    </PrizesStack.Navigator>
        );
    }
    
    export default PrizesStackScreen;
