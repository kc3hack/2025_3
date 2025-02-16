import initialData from "./initialData.json";
import { UserData } from "../dataType";
import { createUserData } from "../genUserData";
import { createContext, useState, useEffect,ReactNode } from "react";

// UserDataContextの作成
const UserDataContext = createContext<UserData | null>(null);
interface UserDataProviderProps {
    children: ReactNode;
}
const UserDataProvider: React.FC<UserDataProviderProps> = ({ children })  => {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        // localStorageからデータを取得
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setUserData(JSON.parse(storedData));
        } else {
            // initialData.jsonからデータを取得
            const initialUserData: UserData = createUserData(
                initialData.id,
                initialData.name,
                initialData.sand,
                initialData.elevation,
                initialData.facility,
                initialData.tool_level
            );
            setUserData(initialUserData);
            localStorage.setItem('userData', JSON.stringify(initialUserData));
        }
    }, []);

    return (
        <UserDataContext.Provider value={userData}>
            {children}
        </UserDataContext.Provider>
    );
};

export { UserDataContext, UserDataProvider };