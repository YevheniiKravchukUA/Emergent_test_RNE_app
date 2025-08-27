export const FormatUtils = {
    currency: (amount: number, currency: string = 'EUR'): string => {
        return new Intl.NumberFormat('nl-NL', {
            style: 'currency',
            currency,
        }).format(amount);
    },

    date: (date: Date | string, locale: string = 'nl-NL'): string => {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleDateString(locale);
    },

    datetime: (date: Date | string, locale: string = 'nl-NL'): string => {
        const dateObj = typeof date === 'string' ? new Date(date) : date;
        return dateObj.toLocaleString(locale);
    },

    phoneNumber: (phone: string): string => {
        // Простое форматирование телефона
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    },

    capitalize: (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    truncate: (str: string, maxLength: number): string => {
        if (str.length <= maxLength) return str;
        return str.slice(0, maxLength - 3) + '...';
    },
};