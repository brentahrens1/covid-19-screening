import { useEffect, useState } from 'react'
import LoadScreen from '../LoadScreen/LoadScreen'

// scss
import '../../sass/_home.scss'

// logo
import logo from '../../assets/images/logo.png'

const Home = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isChecked1, setIsChecked1 ] = useState(false)
    const [ isChecked2, setIsChecked2 ] = useState(false)
    const [ isChecked3, setIsChecked3 ] = useState(false)
    const [ isChecked4, setIsChecked4 ] = useState(false)
    
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
                            <div className="logo-container">
                                <div className="logo">
                                    <img src={logo} alt="Company logo goes here" />
                                </div>
                            </div>
                            <div>
                                <h1>Covid-19 Health Screening</h1>
                                <form>
                                    <input type="text" />
                                    <p className="input-p">Employee Name</p>
                                    <select>
                                        <option></option>
                                        <option>Reception</option>
                                        <option>Clinician</option>
                                    </select>
                                    <p className="input-p">Department Name</p>
                                    <p>1. Have you had a fever of 100.4 degrees or higher or a new or worsening cough/ shortness of breath/ sore throat or body aches?</p>
                                    <div className="checkboxes">
                                        <div className="checkboxes__inner">
                                            <input className={`${isChecked1 ? "active" : ""}`} onClick={() => setIsChecked1(!isChecked1)} type="checkbox" name="yes" />
                                            <label className="checkboxes" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="checkboxes__inner">
                                            <input className={`${isChecked2 ? "active" : ""}`} onClick={() => setIsChecked2(!isChecked2)} type="checkbox" name="no" />
                                            <label className="checkboxes" htmlFor="no">No</label>
                                        </div>
                                    </div>
                                    <p>2. Have you had close contact (6 fett or less and for 15 minutes or more) with a known Covid-19 patient?</p>
                                    <div className="checkboxes">
                                        <div className="checkboxes__inner">
                                            <input className={`${isChecked3 ? "active" : ""}`} onClick={() => setIsChecked3(!isChecked3)} type="checkbox" name="yes" />
                                            <label className="checkboxes" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="checkboxes__inner">
                                            <input className={`${isChecked4 ? "active" : ""}`} onClick={() => setIsChecked4(!isChecked4)} type="checkbox" name="no" />
                                            <label className="checkboxes" htmlFor="no">No</label>
                                        </div>
                                    </div>
                                    <p>If your response is yes to either question please notify your supervisor immediatley.</p>
                                    <p>Seek a doctors advice in addition to use this App before making any medical decisions.</p>
                                    <button>Submit</button>
                                </form>
                            </div>
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