import React , {useState, useEffect} from 'react'

function TestUseEffectTwo() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize) // The resize event fires when the document view (window) has been resized.
        // whenever this component gets unmounted the return will be excuted which is clean up before 
        
        return () => {
            console.log('go')
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    // this is dynamic because it's being called on mount 

    return (
        <div onClick>
            {windowWidth}
        </div>
    )
}

export default TestUseEffectTwo


