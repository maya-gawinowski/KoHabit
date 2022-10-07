import './Form.css'

function Form(){
    return(
        <div class="container_form">
            <div class="form_title">
                <h1>You are looking for :</h1>
            </div>
            <div class="container_button">
                <button class="selection_button">Faire garder</button>
                <button class="selection_button">Garder</button>
            </div>
            <div class="form">

                <br />

                <label>
                    Close to your home ?
                </label>

                <br />

                <input 
                    type="text"
                    name="zipcode"
                    placeholder='zipcode'
                    required                  
                />
                

                <br />
                
                <label>
                    When ?
                </label>

                <br />

                <input 
                    type="date"
                    name="date"
                    placeholder='calendar'
                    required                  
                />
                

                <br />

                <label>
                    What kind of animal ?
                </label>

                <br />

                <select
                    name="animal">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Snake</option>
                    <option value="goldfish">Elephant</option>

                </select>              

                <br />
                
            </div>
            <div class="submit_container">
                <button type='submit' class="selection_button">Valider</button>
            </div>
        </div>
        
    )
}

export default Form;