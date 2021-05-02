import Header from '../components/Header'
import ButtonHome from '../components/ButtonHome'

import EpisodeLocation from '../components/EpisodeLocation'

const secondChallenge = () => {
    
    return (
        <div>
            <Header />
            <div className='defaultContainer'>
                <div className='buttonContainer'>
                    <EpisodeLocation />
                </div>
                
                <ButtonHome />
            </div>
            
        </div>
    )
}

export default secondChallenge;