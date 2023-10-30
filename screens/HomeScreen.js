import { View, Button, Text } from 'react-native';
import { useRandomQuote } from '../hooks/quotes';

function HomeScreen({ navigation }) {
    const { loading, data } = useRandomQuote('https://type.fit/api/quotes');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ marginBottom: 10 }}>Home Screen 🏡</Text>
            {loading
                ? <Text>Loading...</Text>
                : <View>
                    <Text>{data.text}</Text>
                    <Text>-{data.author}</Text>
                </View>
            }
            <Button
                title="Go to details"
                onPress={() => navigation.navigate('Details')} />
        </View>
    )
}

export default HomeScreen;