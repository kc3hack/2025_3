import { Facility } from "../dataType";
import { createUserData } from "../genUserData";
import { createContext, useState, useEffect, ReactNode } from "react";
const initialFacility: Facility[] = [
    { name: "ダミー", img_path:"", efficiency: 0, cost: 0, magnification: 0, stock: 0 },
    { name: "施設1", img_path:"test1", efficiency: 1, cost: 1, magnification: 1, stock: 0 },
    { name: "施設2", img_path:"test2", efficiency: 1, cost: 2, magnification: 2, stock: 0 },
    { name: "施設3", img_path:"test3", efficiency: 1, cost: 3, magnification: 3, stock: 0},
];
const FacilityContext = createContext<{
    facility: Facility[];
    setFacility: React.Dispatch<React.SetStateAction<Facility[]>>;
} | null>(null);
interface FacilityProviderProps {
    children: ReactNode;
}
const FacilityProvider: React.FC<FacilityProviderProps> = ({ children }) => {
    const [facility, setFacility] = useState<Facility[]>(initialFacility);
    useEffect(() => {
        const storedData = localStorage.getItem('facility');
        if (storedData) {
            setFacility(JSON.parse(storedData));
        } else {
            setFacility(initialFacility);
            localStorage.setItem('facility', JSON.stringify(initialFacility));
        }
    }, []);
    return (
        <FacilityContext.Provider value={{ facility, setFacility }}>
            {children}
        </FacilityContext.Provider>
    );
};
export { FacilityContext, FacilityProvider };