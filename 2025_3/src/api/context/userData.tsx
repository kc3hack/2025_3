import initialData from "./initialData.json";
import { UserData } from "../dataType";
import { createUserData } from "../genUserData";
import { createContext, useState, useEffect, ReactNode } from "react";

// UserDataContextの作成
const UserDataContext = createContext<{
    userData: UserData | null;
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
} | null>(null);

interface UserDataProviderProps {
    children: ReactNode;
}

const UserDataProvider: React.FC<UserDataProviderProps> = ({ children }) => {
    let initialUserData : UserData;
    // localStorageからデータを取得
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        initialUserData = JSON.parse(storedData);
    } else {
        // initialData.jsonからデータを取得
        initialUserData = createUserData(
            initialData.id,
            initialData.name,
            initialData.sand,
            initialData.elevation,
            initialData.money,
            initialData.facility,
            initialData.tool_level
        );
        localStorage.setItem('userData', JSON.stringify(initialUserData));
    }
    const [userData, setUserData] = useState<UserData | null>(initialData);

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataContext, UserDataProvider };
