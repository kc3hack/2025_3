import { Facility } from "../dataType";
import { createUserData } from "../genUserData";
import { createContext, useState, useEffect, ReactNode } from "react";
import initialFacility from "../../stores/inicialFacilities";

const FacilityContext = createContext<{
    facility: Facility[] | null;
    setFacility: React.Dispatch<React.SetStateAction<Facility[] | null>>;
} | null>(null);

interface FacilityProviderProps {
    children: ReactNode;
}

const FacilityProvider: React.FC<FacilityProviderProps> = ({ children }) => {
    const [facility, setFacility] = useState<Facility[] | null>(null);

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
