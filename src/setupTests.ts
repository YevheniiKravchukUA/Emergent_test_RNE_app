import 'react-native-gesture-handler/jestSetup';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
<<<<<<< HEAD
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
=======
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
);

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
<<<<<<< HEAD
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => { };
    return Reanimated;
=======
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
});

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Mock navigation
jest.mock('@react-navigation/native', () => {
<<<<<<< HEAD
    return {
        ...jest.requireActual('@react-navigation/native'),
        useNavigation: () => ({
            navigate: jest.fn(),
            goBack: jest.fn(),
        }),
    };
=======
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
>>>>>>> d32bd4241d675354d77eee9897d31aa8652939a3
});