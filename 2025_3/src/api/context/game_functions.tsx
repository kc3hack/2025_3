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
   
    return () => {
        if (userData) {
             const fee=10*userData.tool_level;//この辺用改変
            if(userData.money<fee){
                alert("お金が足りません");
                return false
                
            }
            const updatedUserData = {
                ...userData,
                money: userData.money - fee,
                tool_level: userData.tool_level + 1
            };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            return true
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
//施設の収益をストックする関数

   // Facilityのefficiencyの値にUserDataのfacilityの値をかけた分だけFacirityのstockの値を毎秒増やす関数
   //この関数ではUserDataの値を変更しない
   //userData.facilityの値が1以上のものに対して、facilityのefficiencyの値分だけstockの値を増やす
   //stockの値stockの値はFacilityのefficiencyの値にUserDataのfacilityの値をかけた値の3600倍以上にはならない

export const useStockBenefit = () => {//こいつを毎秒実行する感じにする
    const { userData } = useUserData();
    const { facility, setFacility } = useFacilityData();

    return (): void => {
        if (userData && facility) {
            const updatedFacility = facility.map((fac, index) => {
                if (userData.facility[index] >= 1) {
                    const increment = fac.efficiency * userData.facility[index];
                    const maxStock = fac.efficiency * userData.facility[index] * 3600;
                    return {
                        ...fac,
                        stock: Math.min(fac.stock + increment, maxStock),
                    };
                }
                return fac;
            });

            setFacility(updatedFacility);
            localStorage.setItem('facility', JSON.stringify(updatedFacility));
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
                    const benefit = fac.stock * fac.magnification;
                    const updatedFacility = [...facility];
                    updatedFacility[index].stock = 0;
                    setFacility(updatedFacility);
                    return acc + benefit;
                }, 0),
            };
            
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));
            localStorage.setItem('facility', JSON.stringify(facility));
        }
    };
}

import "../src/components/Tools.css";
import { useState } from "react";
import tipA from "../src/assets/a.png";
import tipB from "../src/assets/b.png";
import tipC from "../src/assets/c.png";

export const Tools = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [tipA, tipB, tipC];
    const { userData, setUserData } = useUserData();
    const buttonTest2 = () => {
        if (userData) {
             const fee=10*userData.tool_level;//この辺用改変
            if(userData.money<fee){
                alert("お金が足りません");
                return 
                
            }
            const updatedUserData = {
                ...userData,
                money: userData.money - fee,
                tool_level: userData.tool_level + 1
            };
            setUserData(updatedUserData);
            localStorage.setItem('userData', JSON.stringify(updatedUserData));

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            };
          };
  
    return (
      <>
        <div className="testDiv Case2">
          div2
          <div className="testDiv11 ">
            ➡
          </div>
          <div className="testDiv Case6">
            <img src={images[currentImageIndex]} alt="画像1" />
          </div>
          <div className="testDiv Case7">
            <img src={images[(currentImageIndex + 1) % images.length]} alt="画像2" />
          </div>
          <button className="testButton" onClick={buttonTest2}>
            Change Image
          </button>
        </div>
      </>
    );
}
export default Tools;