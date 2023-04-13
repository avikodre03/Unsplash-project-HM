import { createContext, useState } from "react";

export const mainContext = createContext();

function MainProvider({ children }) {
    const [category, setcategory] = useState("programming")
    const [searchValue, setsearchValue] = useState(category)
    const [photos, setphotos] = useState([])
    return (
        <mainContext.Provider value={{
            category, setcategory,
            searchValue, setsearchValue,
            photos, setphotos
        }}>
            {children}
        </mainContext.Provider>
    );
}

export default MainProvider;
