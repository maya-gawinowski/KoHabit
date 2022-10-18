import './Values.css'
import values from '../../Assets/values_img.jpg'

function Values({size}) {
    return(
        <div class="container_values" style={{ 
            flexDirection : size ==='small' ? 'column' : 'row',         
        }}>
            <img src={values} alt="pets" class="values_img" style={{ 
            width : size ==='small' ? 'auto' : '20vw',         
        }}/>
            <div className='values_description' style={{ 
            marginLeft : size ==='small' ? '0' : '5em',
                   
        }}>
                <div className='values_title'>Values</div>
                <div className='values_text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellendus perferendis quaerat eius dicta alias aperiam aut doloremque impedit mollitia sint ex, temporibus veniam nobis ad reprehenderit consectetur hic facilis.
                </div>

            </div>
            
        </div>
    )
}

export default Values;