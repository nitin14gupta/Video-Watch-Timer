import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreen3() {
  const router = useRouter();

  return (
    <View className="bg-blue-400 flex-1 justify-center items-center p-6">
      <Text className="text-white text-3xl font-bold">Start Tracking Now!</Text>
      <Text className="text-white text-lg mt-3 text-center">Gain insights and optimize your video time.</Text>

      <TouchableOpacity onPress={() => router.push('/(tabs)')} className="mt-6 bg-white px-6 py-3 rounded-lg">
        <Text className="text-blue-600 text-lg font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
