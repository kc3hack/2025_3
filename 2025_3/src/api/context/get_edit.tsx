import { useContext } from 'react';
import { UserDataContext } from './userData';
import { LandmarkContext } from './landmark';
import { ToolContext } from './tools';
import { UserData,Landmark } from '../dataType';


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
            setUserData((prev) => {
                if (prev) {
                    const updatedUserData = { ...prev, sand: newSand };
                    localStorage.setItem('userData', JSON.stringify(updatedUserData));
                    return updatedUserData;
                }
                return prev;
            }
            );
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

// ランドマーク全体の情報を取得するカスタムフック
export const useLandmark = () => {
    const context = useContext(LandmarkContext);
    if (!context) {
        throw new Error("useLandmark must be used within a LandmarkProvider");
    }
    return context;
};
// ランドマークの高さを取得するカスタムフック
export const useLmHeights = (): number[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.height);
};

// ランドマークのマークポイントを取得するカスタムフック
export const useLmMarkpoints = (): number[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.markpoint);
};

// ランドマークの名前を取得するカスタムフック
export const useLmNames = (): string[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.name);
};

// ランドマークの都道府県を取得するカスタムフック
export const useLmPrefectures = (): string[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.prefecture);
};

// ランドマークの説明を取得するカスタムフック
export const useLmDescriptions = (): string[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.description);
};

// ランドマークの画像パスを取得するカスタムフック
export const useLmImgPaths = (): string[] | null => {
    const { landmarks } = useLandmark();
    if (!landmarks) {
        return null;
    }
    return landmarks.map(landmark => landmark.img_path);
};

//道具の種類の全情報を取得するカスタムフック
export const useTools = () => {
    const context = useContext(ToolContext);
    if (!context) {
        throw new Error("useTools must be used within a ToolProvider");
    }
    return context;
}

//道具の名前を取得するカスタムフック
export const useToolNames = (): string[] | null => {
    const { tools } = useTools();
    if (!tools) {
        return null;
    }
    return tools.map(tool => tool.name);
}

//道具の画像パスを取得するカスタムフック
export const useToolImgPaths = (): string[] | null => {
    const { tools } = useTools();
    if (!tools) {
        return null;
    }
    return tools.map(tool => tool.img_path);
}

//道具の最低レベルを取得するカスタムフック
export const useToolMinLevels = (): number[] | null => {
    const { tools } = useTools();
    if (!tools) {
        return null;
    }
    return tools.map(tool => tool.minLevel);
}


