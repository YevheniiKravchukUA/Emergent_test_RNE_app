import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
<<<<<<< HEAD
    static async setItem(key: string, value: any): Promise<void> {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.error('Ошибка сохранения в storage:', error);
            throw error;
        }
    }

    static async getItem<T = any>(key: string): Promise<T | null> {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.error('Ошибка чтения из storage:', error);
            return null;
        }
    }

    static async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Ошибка удаления из storage:', error);
            throw error;
        }
    }

    static async clear(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Ошибка очистки storage:', error);
            throw error;
        }
    }

    static async getAllKeys(): Promise<string[]> {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.error('Ошибка получения ключей storage:', error);
            return [];
        }
    }
=======
  static async setItem(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Ошибка сохранения в storage:', error);
      throw error;
    }
  }

  static async getItem<T = any>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Ошибка чтения из storage:', error);
      return null;
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Ошибка удаления из storage:', error);
      throw error;
    }
  }

  static async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Ошибка очистки storage:', error);
      throw error;
    }
  }

  static async getAllKeys(): Promise<string[]> {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Ошибка получения ключей storage:', error);
      return [];
    }
  }
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
}