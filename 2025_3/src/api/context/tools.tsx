import { Tool } from "../dataType";
import { createContext, useState, useEffect, ReactNode } from "react";
import initialTools from "../../stores/initialTools";

const ToolContext = createContext<{
    tools: Tool[] | null;
    setTools: React.Dispatch<React.SetStateAction<Tool[] | null>>;
} | null>(null);

interface ToolProviderProps {
    children: ReactNode;
}

const ToolProvider: React.FC<ToolProviderProps> = ({ children }) => {
    const [tools, setTools] = useState<Tool[] | null>(null);

    useEffect(() => {
        setTools(initialTools);
    }, []);

    return (
        <ToolContext.Provider value={{ tools, setTools }}>
            {children}
        </ToolContext.Provider>
    );
};


export { ToolContext, ToolProvider };