import {  Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Piero from '../../assets/images/Piero.jpg';
import '../../css/styles.css';

    

export const Home = () => {
    return (
        <>
           
            <Container fluid  >
            <div className="row profile" style={{marginTop:'10em'}}e>
                <div className="col-md-2">
                    <Image src={Piero} style={{width:'380px',height:'320px',borderRadius:'50%', marginTop:'30px'}} alt="Image profile" fluid />
                </div>
                <div className="col-md-9 description" >
                    <h1 style={{fontSize:'3.5rem'}}>
                        Who am I?
                    </h1>
                    <p> 
                       👋 Hi, my name's Piero Sabino and I'm a Junior Full-stack developer (💻) with a passion for creating beautiful and functional websites. I have a passion for learning new technologies. I'm currently looking for a position in the field of web development.</p>
                </div>
            </div>
            </Container>
        </>
    )
}