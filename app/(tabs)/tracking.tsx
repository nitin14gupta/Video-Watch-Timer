import { View, Text } from 'react-native';

export default function TrackingScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-bold">📊 Tracking</Text>
      <Text className="text-gray-600">View your video watch time and analytics.</Text>
    </View>
  );
}
