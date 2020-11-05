import { useEffect, useState } from 'react'
import LoadScreen from '../LoadScreen/LoadScreen'

const Home = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(!isLoaded)
        }, 3000)
    }, [])

    return (
        <div className="home">
            {
                isLoaded ? 
                (
                    <div className="home">
                        <h1>Home</h1>
                    </div>
                )
                :
                (
                    <>
                    <LoadScreen />
                    </>
                )
            }
        </div>
    )
}

export default Home