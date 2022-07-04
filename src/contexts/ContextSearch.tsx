import { createContext , ReactNode, useContext, useState } from "react";

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextData = {
    textInput: string
    setTextInput: (textInput: string) => void  
}

export const SearchContext = createContext({} as SearchContextData)


export function SearchContextProvider({ children }: SearchContextProviderProps){

    const [textInput, setTextInput] =  useState("");

    return(
        <SearchContext.Provider
        value={{
            textInput,
            setTextInput
        }
            
        }
        >
        {children}
        </SearchContext.Provider>

    )
}

export const useSearch = () => useContext(SearchContext);