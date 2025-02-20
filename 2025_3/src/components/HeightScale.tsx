import "./HeightScale.css";
function HeightScale({elevation}) {
    return(
        <>
            <div 
                className="heightScale"    
                style={{ top: `${100 + elevation}px` }} 
            />
            <div 
                className="heightScale"    
                style={{ top: `${300 + elevation}px` }} 
            />
            <div 
                className="heightScale"    
                style={{ top: `${200 + elevation}px` }} 
            />
            <div 
                className="heightScale"    
                style={{ top: `${400 + elevation}px` }} 
            />

            <div 
                className="heightScale"    
                style={{ top: `${0 + elevation}px` }} 
            />

<div 
                className="heightScale"    
                style={{ top: `${-100 + elevation}px` }} 
            />

        </>
    );
}
export default HeightScale;