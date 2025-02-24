import { Facility } from "../dataType";
import { createContext, useState, useEffect, ReactNode } from "react";
import initialFacility from "../../stores/initialFacilities";

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
            setFacility(initialFacility);
    }, []);

    return (
        <FacilityContext.Provider value={{ facility, setFacility }}>
            {children}
        </FacilityContext.Provider>
    );
};
export { FacilityContext, FacilityProvider };
