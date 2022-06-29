import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context";


export function useFetch(url) {
    
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
        if (!url) return;
        
        setIsLoading(true);
        
        
        async function fetchData() {
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                setData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, [url]);
    
    return { isLoading, data, error };
    
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return { theme, toggleTheme }
}