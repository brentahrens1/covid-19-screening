import { useEffect, useState } from 'react'
import LoadScreen from '../LoadScreen/LoadScreen'

// firebase 
import { db } from '../Firebase/Firebase'

// scss
import '../../sass/_home.scss'

// logo
import logo from '../../assets/images/logo.png'

//router
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ isChecked1, setIsChecked1 ] = useState(true)
    const [ isChecked2, setIsChecked2 ] = useState(true)
    const [ isChecked3, setIsChecked3 ] = useState(true)
    const [ isChecked4, setIsChecked4 ] = useState(true)
    const [ name, setName ] = useState('')    
    const [ department, setDepartment ] = useState('')
    const [ yes1, setYes1 ] = useState('')
    const [ no1, setNo1 ] = useState('')
    const [ yes2, setYes2 ] = useState('')
    const [ no2, setNo2 ] = useState('')
    const history = useHistory()

    const box1 = () => {
        setIsChecked1(!isChecked1)
        console.log(isChecked1)
        if (isChecked1) {
            setYes1("yes")
        }
    }
    const box2 = () => {
        setIsChecked2(!isChecked2)
        if (isChecked2) {
            setNo1("No")
        }
    }
    const box3 = () => {
        setIsChecked3(!isChecked3)
        if (isChecked3) {
            setYes2("yes")
        }
    }
    const box4 = () => {
        setIsChecked4(!isChecked4)
        if (isChecked4) {
            setNo2("No")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/thank-you')
        db.collection('contacts').add({
            name: name,
            department, department,
            question1: `${yes1} ${no1}`,
            question2: `${yes2} ${no2}`
        })
        .catch((error) => {
            console.log(error.message)
        })

        console.log(yes1)
        setName('')
        setDepartment('')
        setYes1('')
        setNo1('')
        setYes2('')
        setNo2('')
        setIsChecked1(true)
        setIsChecked2(true)
        setIsChecked3(true)
        setIsChecked4(true)
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
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                    <p className="input-p">Employee Name</p>
                                    <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                                        <option></option>
                                        <option>Reception</option>
                                        <option>Clinician</option>
                                    </select>
                                    <p className="input-p">Department (Manager)</p>
                                    <p>1. Have you had a fever of 100.4 degrees or higher or a new or worsening cough/ shortness of breath/ sore throat or body aches?</p>
                                    <div className="checkboxes">
                                        <div className="checkboxes__inner">
                                            <input className={`${!isChecked1 ? "active" : ""}`} onClick={box1} type="checkbox" name="yes" value={yes1} required />
                                            <label className="checkboxes" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="checkboxes__inner">
                                            <input className={`${!isChecked2 ? "active" : ""}`} onClick={box2} type="checkbox" name="no" value={no1} required />
                                            <label className="checkboxes" htmlFor="no">No</label>
                                        </div>
                                    </div>
                                    <p>2. Have you had close contact (6 fett or less and for 15 minutes or more) with a known Covid-19 patient?</p>
                                    <div className="checkboxes">
                                        <div className="checkboxes__inner">
                                            <input className={`${!isChecked3 ? "active" : ""}`} onClick={box3} type="checkbox" name="yes" value={yes2} required />
                                            <label className="checkboxes" htmlFor="yes">Yes</label>
                                        </div>
                                        <div className="checkboxes__inner">
                                            <input className={`${!isChecked4 ? "active" : ""}`} onClick={box4} type="checkbox" name="no" value={no2} required />
                                            <label className="checkboxes" htmlFor="no">No</label>
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