import { useContext } from 'react';
import { UserDataContext } from './userData';
import { FacilityContext } from './facility';
import { UserData,Facility } from '../dataType';

// ユーザーデータを取得するカスタムフック
export const useUserData = () => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error("useUserData must be used within a UserDataProvider");
    }
    return context;
};

export const useFacilityData = () => {
    const context = useContext(FacilityContext);
    if (!context) {
        throw new Error("useFacilityData must be used within a FacilityProvider");
    }
    return context;
}

//道具のlevelの値の分だけ土砂の量を増やす関数
export const useAddSand = () => {
    const { userData, setUserData } = useUserData();
    return (): void => {
        if (userData) {
            const updatedUserData = { ...userData, sand: userData.sand + userData.tool_level };//この辺用改変
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};
//土砂の値から標高を算出し代入する関数(今回は土砂の量の三乗根を標高とする)
export const useCalcElevation = ()=> {
    const { userData, setUserData } = useUserData();
   // return userData ? Math.cbrt(userData.sand) : null;
      return (): void => {
        if (userData) {
            const updatedUserData = { ...userData, elevation: Math.cbrt(userData.sand) };//この辺用改変
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
}
//道具のlevelを上げる関数
export const useTool_levelup = () => {
    const { userData, setUserData } = useUserData();
   
    return (): void => {
        if (userData) {
             const fee=10*userData.tool_level;//この辺用改変
            if(userData.money<fee){
                alert("お金が足りません");
                return;
            }
            const updatedUserData = {
                ...userData,
                money: userData.money - fee,
                tool_level: userData.tool_level + 1
            };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
}

// 施設の購入を行える関数（配列の一部値を増減させる関数）
export const useBuyFacility = (index: number) => {
    const { userData, setUserData } = useUserData();
    const facilityContext = useContext(FacilityContext);
    if (!facilityContext) {
        throw new Error("useBuyFacility must be used within a FacilityProvider");
    }
    const { facility } = facilityContext;
    return (): void => {
        if (userData) {
            const fee = facility[index].cost;//この辺用改変
            if (userData.money < fee) {
                alert("お金が足りません");
                return;
            }
            const updatedFacility = [...userData.facility];
            updatedFacility[index] += 1;
            const updatedUserData = {
                ...userData,
                money: userData.money - fee,
                facility: updatedFacility,
            };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
};