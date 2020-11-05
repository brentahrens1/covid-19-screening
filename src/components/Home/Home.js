import { useEffect, useState } from 'react'
import LoadScreen from '../LoadScreen/LoadScreen'

// scss
import '../../sass/_home.scss'

// logo
import logo from '../../assets/images/logo.png'

const Home = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isActive, setIsActive ] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 3000)
    }, [])

    return (
        <div className="home">
            {
                isLoaded ? 
                (
                    <div className="home">
                        <div className="home__form">
                            <div className="logo">
                                <img src={logo} alt="Company logo goes here" />
                            </div>
                            <h1>Covid-19 Health Screening</h1>
                            <form>
                                <input type="text" />
                                <p>Employee Name</p>
                                <select>
                                    <option>IT</option>
                                    <option>Reception</option>
                                    <option>Clinician</option>
                                </select>
                                <p>Department Name</p>
                                <p>1. Have you had a fever of 100.4 degrees or higher or a new or worsening cough/ shortness of breath/ sore throat or body aches?</p>
                                <div className="checkbox-container">
                                    <label className="checkboxes" htmlFor="yes">Yes
                                        <input className="checkbox-input" type="checkbox" name="yes" />
                                        <span></span>
                                    </label>
                                    <label className="checkboxes" htmlFor="yes">Yes
                                        <input className="checkbox-input" type="checkbox" name="yes" />
                                        <span></span>
                                    </label>
                                </div>
                                <p>2. Have you had close contact (6 fett or less and for 15 minutes or more) with a known Covid-19 patient?</p>
                                <div className="checkbox-container">
                                <label className="checkboxes" htmlFor="yes">Yes
                                        <input className="checkbox-input" type="checkbox" name="yes" />
                                        <span></span>
                                    </label>
                                    <label className="checkboxes" htmlFor="yes">Yes
                                        <input className="checkbox-input" type="checkbox" name="yes" />
                                        <span></span>
                                    </label>
                                </div>
                                <p>If your response is yes to either question please notify your supervisor immediatley.</p>
                                <p>Seek a doctors advice in addition to use this App before making any medical decisions.</p>
                                <button>Submit</button>
                            </form>
                        </div>
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