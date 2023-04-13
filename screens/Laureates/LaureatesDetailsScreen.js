import React from "react";
import {Text} from 'react-native'

const LaureatesDetailsScreen = ({ route }) => {
    return(
        <Text>{route.params.id}</Text>
    )

}

export default LaureatesDetailsScreen;