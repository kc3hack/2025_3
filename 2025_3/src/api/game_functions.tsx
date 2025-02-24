import { use, useContext } from 'react';
import { UserDataContext } from './context/userData';
import { FacilityContext } from './context/facility';
import { UserData,Facility } from './dataType';
import initialFacilities from '../stores/initialFacilities';

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
    return (): number => {
        if (userData) {
            const newSand = userData.sand + 30*(Math.pow(2.2, userData.tool_level-1));//この辺用改変
             const newElevation = Math.cbrt(newSand);
          //  const newElevation = userData.elevation + 1;
            const updatedUserData = { ...userData, sand: newSand, elevation: newElevation };//この辺用改変
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            return newElevation;
        }
        return 0;
    };
};
//土砂の値から標高を算出し代入する関数(今回は土砂の量の三乗根を標高とする)
export const useCalcElevation = ()=> {
    const { userData, setUserData } = useUserData();
   // return userData ? Math.cbrt(userData.sand) : null;
      return (): void => {
        if (userData) {
            setUserData((prev) => {
                if (prev) {
                    const updatedUserData = {
                        ...prev,
                        elevation: Math.cbrt(prev.sand), // ここを変更
                    };
                    localStorage.setItem('userData', JSON.stringify(updatedUserData));
                    return updatedUserData;
                }
                return prev;
            });
        }
    };
}
//道具のlevelを上げる関数
export const useTool_levelup = () => {
    const { userData, setUserData } = useUserData();

    return (): void => {
        if (userData) {

             const fee=Math.floor(30 * Math.pow(1.5, userData.tool_level-1));//この辺用改変
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

// 施設をアンロックする関数
export const useUnlockFacility = () => {
    const { userData, setUserData } = useUserData();
    return (idx: number): void => {
        if (userData) {
            setUserData((prev) => {
                if (prev) {
                    const updatedUserData = {...prev,};
                    if(userData.facility[idx]===0){
                    updatedUserData.facility[idx] = 1;}
                    else{
                       updatedUserData.facility[idx] = userData.facility[idx] ;
                    }
                    localStorage.setItem('userData', JSON.stringify(updatedUserData));
                    return updatedUserData;
                }
                return prev;
            });
        }
    };
}

// 施設の購入を行える関数（配列の一部値を増減させる関数）
export const useBuyFacility = () => {
    const { userData, setUserData } = useUserData();
    const facilityContext = useContext(FacilityContext);
    if (!facilityContext) {
        throw new Error("useBuyFacility must be used within a FacilityProvider");
    }
    const { facility } = facilityContext;
    return (index: number): void => {
        if (userData && facility) {
            const fee = Math.round(facility[index].cost * facility[index].magnification *Math.log(2+(userData.facility[index]-1))** (userData.facility[index] - 1));
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
//施設の収益をストックする関数

   // Facilityのefficiencyの値にUserDataのfacilityの値をかけた分だけFacirityのstockの値を毎秒増やす関数
   //この関数ではUserDataの値を変更しない
   //userData.facilityの値が1以上のものに対して、facilityのefficiencyの値分だけstockの値を増やす
   //stockの値stockの値はFacilityのefficiencyの値にUserDataのfacilityの値をかけた値の3600倍以上にはならない

export const useStockBenefit = () => {//こいつをメインループに入れる
    const { userData } = useUserData();
    const { setFacility } = useFacilityData();

    return (deltaTime: number): void => {
        if (userData && setFacility) {
            setFacility((prev) => {
                if (prev) {
                    return prev.map((fac, index) => {
                        if (userData.facility[index] >= 1) {
                            const increment = fac.efficiency * userData.facility[index] * (userData.elevation / 500 * 9 + 1) * deltaTime;
                            const maxStock = fac.efficiency * userData.facility[index] * 3600;
                            return {
                                ...fac,
                                stock: Math.min(fac.stock + increment, maxStock),
                            };
                        }
                        return fac;
                    });
                }
                return prev;
            });
        }
    };
};

//施設の収益を受け取る関数
export const useGetBenefit = () => {
    const { userData, setUserData } = useUserData();
    const { facility, setFacility } = useFacilityData();
    return (): void => {
        if (userData && facility) {
            const updatedUserData = {
                ...userData,
                money: userData.money + facility.reduce((acc, fac, index) => {
                    const benefit = Math.floor(fac.stock);
                    const updatedFacility = [...facility];
                    updatedFacility[index].stock = 0;
                    setFacility(updatedFacility);
                    return Math.floor(acc + benefit);
                }, 0),
            };

            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
        }
    };
}
