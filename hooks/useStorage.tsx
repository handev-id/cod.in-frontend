import AsyncStorage from "@react-native-async-storage/async-storage";

export async function useStoreData(
  key: string,
  value: string
): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function useGetData(key: string): Promise<string | null> {
  try {
    const data = await AsyncStorage.getItem(key);
    if (!data) return null;
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
