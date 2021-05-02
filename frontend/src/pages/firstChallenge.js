
import Header from '../components/Header'
import LCounter from '../components/LCounter'
import CCounter from '../components/CCounter'
import ECounter from '../components/ECounter'
import ButtonHome from '../components/ButtonHome'

const firstChallenge = () => {
    
    return (
        <div>
            <Header />
            <div className='defaultContainer'>
                <div className='buttonContainer'>
                    <LCounter />
                    <CCounter />
                    <ECounter />
                </div>
                
                <ButtonHome />
            </div>
            
        </div>
    )
}

export default firstChallenge;