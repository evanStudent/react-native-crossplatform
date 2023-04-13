import { FlatList, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react' 
import { ListItem } from '@rneui/themed'

const LaureatesHomeScreen = ({ navigation }) => {

    const [laureates, setLaureates] = useState([]);
    const [apiUrl, setApiUrl] = useState('https://api.nobelprize.org/2.1/laureates')
    const [isFetchingData, setIsFetchingData] = useState(false) 

    const fetchData = async () => {
        console.log(`fetching data ${apiUrl}`)

        setIsFetchingData(true)

        //fetch our crew list            
        const response = await fetch(apiUrl)
        const json = await response.json()

        // update the apiUrl with our 'next' link 
        setApiUrl(json.links.next)


        // set the data for our list 
        setLaureates([...laureates, ...json.laureates]); 

        setIsFetchingData(false)
    }

useEffect(() => {
    fetchData()
}, [])

const createListItem = ({item}) => {
        return (
            <ListItem bottomDivider
            onPress = {() => { navigation.navigate('LaureatesDetails', {
                id: item.id
            }) }} 
            >
                <ListItem.Content>
                    <ListItem.Title>{item.knownName ? item.knownName.en : item.orgName.en}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
                </ListItem>
        )
}

 return(
    <SafeAreaView style={styles.container}>
        <FlatList 
            data = {laureates}
            renderItem={createListItem}
            keyExtractor={item => item.id}
            onEndReached={fetchData}
            onEndReachedThreshold={0.5}
        />
        {
            isFetchingData &&  <ActivityIndicator size="large" marginVertical={8} />
        }
    </SafeAreaView>
 )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0
        }
    }
);


export default LaureatesHomeScreen;