import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="flex-1 items-center justify-center bg-stone-800 gap-6">
        <Link href="/" className="text-xl font-bold text-white">
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}
