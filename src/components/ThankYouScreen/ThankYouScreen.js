// scss
import '../../sass/_thank-you-screen.scss'

// logo
import logo from '../../assets/images/logo.png'

const ThankYouScreen = () => {
    return (
        <div className="thank-you-screen">
            <div className="thank-you-screen__inner">
                <div className="logo-container">
                    <div className="logo">
                        <img src={logo} alt="Company logo goes here" />
                    </div>
                </div>
                <div className="thank-you-screen__content">
                    <h1>Thank you</h1>
                    <p>Your Covid-19 health screening has been submited to your manager. Have a great day</p>
                </div>
            </div>
        </div>
    )
}

export default ThankYouScreen