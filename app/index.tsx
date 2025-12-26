import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-stone-800 gap-6">
      <Text className="text-xl font-bold text-white">Home screen</Text>

      <Link href={"/about"} className="text-xl underline text-white">
        About
      </Link>
    </View>
  );
}
