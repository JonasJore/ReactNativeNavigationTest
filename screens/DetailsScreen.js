import { View, Button, Text } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to homescreen"
        onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailsScreen;