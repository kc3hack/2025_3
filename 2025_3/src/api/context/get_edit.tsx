import { useContext } from 'react';
import { UserDataContext } from './userData';
import { UserData } from '../dataType';

// ユーザーデータを取得するカスタムフック
export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("useUserData must be used within a UserDataProvider");
    }
    return context;
};

// ユーザーデータのIDを取得するカスタムフック
export const useUserId = (): number | null => {
    const { userData } = useUserData();
    return userData ? userData.id : null;
};

export const useUserName = (): string | null => {
    const { userData } = useUserData();
    return userData ? userData.name : null;
};

export const useSand = (): number | null => {
    const { userData } = useUserData();
    return userData ? userData.sand : null;
};

export const useElevation = (): number | null => {
    const { userData } = useUserData();
    return userData ? userData.elevation : null;
};

export const useMoney = (): number | null => {
    const { userData } = useUserData();
    return userData ? userData.money : null;
}

export const useFacility = (): number[] | null => {
    const { userData } = useUserData();
    return userData ? userData.facility : null;
};

export const useToolLevel = (): number | null => {
    const { userData } = useUserData();
    return userData ? userData.tool_level : null;
};

// ユーザーデータのIDを編集するカスタムフック
export const useEditUserId = () => {
    const { userData, setUserData } = useUserData();
    return (newId: number): void => {
        if (userData) {
            const updatedUserData = { ...userData, id: newId };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
}

// ユーザーデータの名前を編集するカスタムフック

export const useEditUserName = () => {
    const { userData, setUserData } = useUserData();
    return (newName: string): void => {
        if (userData) {
            const updatedUserData = { ...userData, name: newName };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
}

// 砂の量を編集するカスタムフック
export const useEditSand = () => {
    const { userData, setUserData } = useUserData();
    return (newSand: number): void => {
        if (userData) {
            const updatedUserData = { ...userData, sand: newSand };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};

// 標高を編集するカスタムフック
export const useEditElevation = () => {
    const { userData, setUserData } = useUserData();
    return (newElevation: number): void => {
        if (userData) {
            const updatedUserData = { ...userData, elevation: newElevation };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};

// お金を編集するカスタムフック
export const useEditMoney = () => {
    const { userData, setUserData } = useUserData();
    return (newMoney: number): void => {
        if (userData) {
            const updatedUserData = { ...userData, money: newMoney };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};

// 施設を編集するカスタムフック
export const useEditFacility = () => {
    const { userData, setUserData } = useUserData();
    return (newFacility: number[]): void => {
        if (userData) {
            const updatedUserData = { ...userData, facility: newFacility };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};

// 道具のレベルを編集するカスタムフック
export const useEditToolLevel = () => {
    const { userData, setUserData } = useUserData();
    return (newToolLevel: number): void => {
        if (userData) {
            const updatedUserData = { ...userData, tool_level: newToolLevel };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};
