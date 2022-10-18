import './Contact.css'
import insta from '../../Assets/insta.png'
import twitter from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkedin.png'

function Contact({size}) {
    return(
        <div class="container_contact" >
            <div class="contact_title">
                Contact us
            </div>
            <div class="contacts" style={{flexDirection: size ==='small' ? 'column' : 'row'}}>
                <div>
                    <div class="direct">
                        <div class="direct_title">
                            Mail adress : 
                        </div>
                        <div>
                            kohabit@fakeadress.com
                        </div>
                    </div>
                    <div class="direct">
                        <div class="direct_title">
                            Phone number :
                        </div>
                        <div>
                            +33 1 23 45 67 89
                        </div>
                    </div>
                </div>

                <div class="socials">
                    <a href="http://instagram.com">
                        <img src={insta} alt="logo instagram" className='social'/>
                    </a>
                    <a href="http://twitter.com">
                        <img src={twitter} alt="logo twitter" className='social'/>
                    </a>
                    <a href="http://linkedin.com">
                        <img src={linkedin} alt="logo linkedin" className='social'/>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Contact;