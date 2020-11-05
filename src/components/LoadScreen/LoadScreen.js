// scss
import '../../sass/_load-screen.scss'

// logo
import logo from '../../assets/images/logo.png'

const LoadScreen = () => {
    return (
        <div className="load-screen">
            <div className="load-screen__logo">
                <img src={logo} alt="Companies Logo Here" />
            </div>
        </div>
    )
}

export default LoadScreen