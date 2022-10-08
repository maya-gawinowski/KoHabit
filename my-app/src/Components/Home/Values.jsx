import './Values.css'
import values from '../../Assets/values_img.jpg'

function Values() {
    return(
        <div class="container_values">
            <img src={values} alt="pets" class="values_img"/>
            <div className='values_description'>
                <div className='values_title'>Values</div>
                <div className='values_text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus perferendis quaerat eius dicta alias aperiam aut doloremque impedit mollitia sint ex, temporibus veniam nobis ad reprehenderit consectetur hic facilis.
                </div>

            </div>
            
        </div>
    )
}

export default Values;