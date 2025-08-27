import { Platform, Dimensions } from 'react-native';

export const PlatformUtils = {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
    isWeb: Platform.OS === 'web',

    getScreenDimensions: () => {
        return Dimensions.get('screen');
    },

    getWindowDimensions: () => {
        return Dimensions.get('window');
    },

    isTablet: () => {
        const { width, height } = Dimensions.get('screen');
        const aspectRatio = width / height;
        return Math.min(width, height) >= 768 && (aspectRatio < 1.6 && aspectRatio > 0.6);
    },

    isSmallScreen: () => {
        const { width } = Dimensions.get('screen');
        return width < 375;
    },

    isLargeScreen: () => {
        const { width } = Dimensions.get('screen');
        return width >= 768;
    },

    getStatusBarHeight: () => {
        if (Platform.OS === 'ios') {
            return PlatformUtils.isIPhoneX() ? 44 : 20;
        }
        return 0;
    },

    isIPhoneX: () => {
        const { width, height } = Dimensions.get('screen');
        return (
            Platform.OS === 'ios' &&
            !Platform.isPad &&
            !Platform.isTVOS &&
            (height === 780 ||
                width === 780 ||
                height === 812 ||
                width === 812 ||
                height === 844 ||
                width === 844 ||
                height === 896 ||
                width === 896 ||
                height === 926 ||
                width === 926)
        );
    },
};