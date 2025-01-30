import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold">🏠 Home</Text>
      <Text className="text-gray-600">Track your latest video engagement here!</Text>
    </View>
  );
}
