import { Landmark } from "../dataType";
import { createContext, useState, useEffect, ReactNode } from "react";
import initialLandmarks from "../../stores/initialLandmark";

const LandmarkContext = createContext<{
    landmarks: Landmark[] | null;
    setLandmarks: React.Dispatch<React.SetStateAction<Landmark[] | null>>;
} | null>(null);

interface LandmarkProviderProps {
    children: ReactNode;
}

const LandmarkProvider: React.FC<LandmarkProviderProps> = ({ children }) => {
    const [landmarks, setLandmarks] = useState<Landmark[] | null>(null);

    useEffect(() => {
        setLandmarks(initialLandmarks);
    }, []);

    return (
        <LandmarkContext.Provider value={{ landmarks, setLandmarks }}>
            {children}
        </LandmarkContext.Provider>
    );
};

export { LandmarkContext, LandmarkProvider };