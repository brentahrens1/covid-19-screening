import { useEffect, useState } from 'react'
import LoadScreen from '../LoadScreen/LoadScreen'

// scss
import '../../sass/_home.scss'

// logo
import logo from '../../assets/images/logo.png'

//router
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ screeningFormData, setScreeningFormData ] = useState({})
    const [ selectedOption, setSelectedOption ] = useState('no')
    const [ selectedOption2, setSelectedOption2 ] = useState('no')

    const history = useHistory()

    const clearInputs = () => {
        setScreeningFormData({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:5001/covid-screening-form-67a63/us-central1/app/api/screening', {
            method: 'POST',
            body: JSON.stringify({ ...screeningFormData, selectedOption, selectedOption2 })
        })
        clearInputs()
        history.push('/thank-you')
    }

    const handleChange = (e) => {
        setScreeningFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
        setSelectedOption2(e.target.value)
    }
    
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
                                    <input name="name" type="text" value={screeningFormData.name || ''} onChange={handleChange} required />
                                    <p className="input-p">Employee Name</p>
                                    <select name="department" onChange={handleChange} required>
                                        <option></option>
                                        <option value="reception">Reception</option>
                                        <option value="clinician">Clinician</option>
                                    </select>
                                    <p className="input-p">Department (Manager)</p>
                                    <p>1. Have you had a fever of 100.4 degrees or higher or a new or worsening cough/ shortness of breath/ sore throat or body aches?</p>
                                    <div className="checkbox-container">
                                        <div className="checkbox">
                                            <label htmlFor="yes">Yes</label>
                                            <input 
                                                type="radio" 
                                                name="question-one" 
                                                value="yes" 
                                                checked={selectedOption === 'yes'}
                                                onChange={handleOptionChange} 
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <label htmlFor="no">No</label>
                                            <input
                                                type="radio" 
                                                name="question-one" 
                                                value="no"
                                                checked={selectedOption === 'no'}
                                                onChange={handleOptionChange}
                                            />
                                        </div>
                                    </div>
                                    <p>2. Have you had close contact (6 fett or less and for 15 minutes or more) with a known Covid-19 patient?</p>
                                    <div className="checkbox-container">
                                        <div className="checkbox">
                                            <label htmlFor="yes">Yes</label>
                                            <input 
                                                type="radio" 
                                                name="question-two" 
                                                value="yes" 
                                                checked={selectedOption2 === 'yes'}
                                                onChange={handleOptionChange} 
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <label htmlFor="no">No</label>
                                            <input
                                                type="radio" 
                                                name="question-two" 
                                                value="no"
                                                checked={selectedOption2 === 'no'}
                                                onChange={handleOptionChange}
                                            />
                                        </div>
                                    </div>
                                    <p>If your response is yes to either question please notify your supervisor immediatley.</p>
                                    <p>Seek a doctors advice in addition to use this App before making any medical decisions.</p>
                                    <button onClick={handleSubmit}>Submit</button>
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