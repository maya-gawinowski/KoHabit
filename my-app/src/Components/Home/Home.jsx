import Form from "./Form";
import Introduction from "./Introduction";
import Values from "./Values";
import Contact from "./Contact";
import fond from '../../Assets/home_background.jpg'
import './Home.css'

function Home(){
    return(
        <div>
            <div class="formulaire"><Form/></div>
            <img src= {fond} alt="backroung image" class="background_img"/>
            <Introduction/>
            <Values/>
            <Contact/>
        </div>
    )
}

export default Home;