import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "react-native-storage";


const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null
})


export const saveData = async (key, data) => {
  try {
    storage.save({ key: key, data: data })
  } catch (e) {
    console.error(e)
  }
}

export const readData = async (key) => {
  return await storage.load({ key })
}

export const removeData = async (key) => {
  try {
    return await storage.remove({ key: key });
  }
  catch (e) {
    console.error(e)
  }
}