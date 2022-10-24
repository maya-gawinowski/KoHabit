import './Form.css'

function Form({size}){
    return(
        <div class="container_form" style={{
            width : size ==='small' ? '100vw' : '30vw',
        }}>
            <div class="form_title">
                <h1>I want to...</h1>
            </div>
            <div class="container_button">
                <button class="selection_button">Find a sitter</button>
                <button class="selection_button">Petsit</button>
            </div>
            <div class="form" >

                <br />

                <label>
                    Near:
                </label>

                <br />

                <input
                    type="text"
                    name="zipcode"
                    placeholder='Enter your zipcode'
                    required
                />


                <br />

                <label>
                    On this date:
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
                    For this kind of animal:
                </label>

                <br />

                <select
                    name="animal">
                    <option value="">--Please choose an option--</option>
                    <option value="big-dog">Big dog</option>
                    <option value="small-dog">Small dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Snake</option>
                    <option value="goldfish">Elephant</option>

                </select>

                <br />

            </div>
            <div class="submit_container">
                <button type='submit' class="selection_button">Search</button>
            </div>
        </div>

    )
}

export default Form;
