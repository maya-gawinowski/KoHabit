import './Login.css';
import {Grid, Container } from '@mui/material';
  //direction={{display: 'flex',flexDirection: 'row',p: 1,m: 1,bgcolor: 'background.paper',borderRadius: 1, textAlign: 'center'}}

function Login(){

    return(
        <div className='maincontent'>
                <Grid className='register'>
                    <h2>Je n'ai pas de compte</h2>
                    <form>
                        <label>
                            Name <br />
                            <input type="text" name="name" />
                        </label> <br />
                        <label>
                            Email address <br />
                            <input type="text" name="email" />
                        </label> <br />
                        <label>
                            Password <br />
                            <input type="text" name="pwd" />
                        </label> <br />
                        <label>
                            Confirm Password<br />
                            <input type="text" name="cpwd" />
                        </label> <br />
                        <input type="submit" value="Register" />
                    </form>
                </Grid>
                <Grid className='login'>
                    <h2>J'ai déjà un compte</h2>
                    <form>
                        <label>
                            Email address <br />
                            <input type="text" name="emaillog" />
                        </label> <br />
                        <label>
                            Password <br />
                            <input type="text" name="pwdlog" />
                        </label> <br />
                        <input type="submit" value="Log In" />
                    </form>
                </Grid>
        </div>
    )
}

export default Login;
