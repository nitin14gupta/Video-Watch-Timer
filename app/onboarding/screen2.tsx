import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

export default function OnboardingScreen1() {
  const router = useRouter();
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    try {
      const { status: storageStatus } = await MediaLibrary.requestPermissionsAsync();
      if (storageStatus !== 'granted') {
        Alert.alert("Permission Denied", "Storage permission is required.");
        return;
      }

      const { status: locationStatus } = await Location.requestForegroundPermissionsAsync();
      if (locationStatus !== 'granted') {
        Alert.alert("Permission Denied", "Location permission is required.");
        return;
      }

      setPermissionsGranted(true);
    } catch (error) {
      Alert.alert("Error", "An error occurred while requesting permissions.");
    }
  };

  return (
    <View className="bg-blue-600 flex-1 justify-center items-center p-6">
      <Text className="text-white text-3xl font-bold">Video Watch Timer</Text>
      <Text className="text-white text-lg mt-3 text-center">Track your video engagement with ease.</Text>

      {permissionsGranted && (
        <TouchableOpacity onPress={() => router.push('/onboarding/screen3')} className="mt-6 bg-white px-6 py-3 rounded-lg">
          <Text className="text-blue-600 text-lg font-bold">Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
