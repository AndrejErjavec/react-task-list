import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext("");

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme ? localTheme : 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
