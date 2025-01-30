import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to the onboarding screen after 2.5 seconds
    const timer = setTimeout(() => {
      router.push('/onboarding/screen1');
    }, 2500);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className='bg-[#3b5998] flex-1 justify-center items-center'>
      <Text className='text-white text-2xl font-bold'>Welcome to My App</Text>
    </View>
  );
}
