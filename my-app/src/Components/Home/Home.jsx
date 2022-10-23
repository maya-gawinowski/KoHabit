import Form from "./Form";
import Introduction from "./Introduction";
import Values from "./Values";
import Contact from "./Contact";
import fond from '../../Assets/home_background.jpg'
import './Home.css'
import Media from 'react-media';
import { Fragment } from "react";

function Home(){
    return(
        <div>
            

            <Media queries ={{
                small:"(max-width:1440px)",
                large: "(min-width: 1440px)"
            }}>
                {matches => (
                    <Fragment>
                        <img src= {fond} alt="backroung image" class="background_img"/>
                        <div class="formulaire" style={{
                            position : matches.small ? 'relative' : 'absolute',
                            right : matches.small ? '0px' : "20vw",
                            top : matches.small ? '7vh' : "15vw"
 
                        }}>
                            {matches.small && <Form size="small"/>}
                            {matches.large && <Form size="large"/>}
                            
                        </div>
                        
                        <Introduction/>

                        {matches.small && <Values size="small"/>}
                        {matches.large && <Values size="large"/>}
                        
                        {matches.small && <Contact size="small"/>}
                        {matches.large && <Contact size="large"/>}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}

export default Home;