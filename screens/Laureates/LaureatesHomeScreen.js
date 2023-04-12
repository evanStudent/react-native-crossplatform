import { FlatList, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react' 
import { ListItem } from '@rneui/themed'

const LaureatesHomeScreen = () => {

    const [laureates, setLaureates] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        //fetch our crew list            
        const response = await fetch(`https://api.nobelprize.org/2.1/laureates`)
        const json = await response.json()
        setLaureates(json.laureates); 
    }
    fetchData()
}, [])

const createListItem = ({item}) => {
        return (
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.knownName.en}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
        )
}

 return(
    <SafeAreaView>
        <FlatList 
            data = {laureates}
            renderItem={createListItem}
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
 )
}

export default LaureatesHomeScreen;