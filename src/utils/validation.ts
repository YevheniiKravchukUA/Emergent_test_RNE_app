export const ValidationUtils = {
    email: (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    password: (password: string): boolean => {
        return password.length >= 6;
    },

    name: (name: string): boolean => {
        return name.trim().length >= 2;
    },

    phone: (phone: string): boolean => {
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        return phoneRegex.test(phone);
    },

    required: (value: any): boolean => {
        if (typeof value === 'string') {
            return value.trim().length > 0;
        }
        return value !== null && value !== undefined;
    },
};