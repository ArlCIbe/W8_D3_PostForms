import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'

function CreateButton() {

    {/* useState hooks enhance UI by giving user visual cues at different stages of the card creation*/}

    const [newPokeLoading, setNewPokeLoading] = useState(false); 
    {/* loading symbol renders once button is clicked (i.e., newPokeLoading state changes to true) */}

    const [userMessage, setUserMessage] = useState(''); 
    {/* msg indicating sucessful/failed creation displays when renders (i.e., newPokeLoading state changes back to false */}

    const createPokeCard = async() => {
    {/* implementation for state changes execute before data is finished being fetched */}

        setNewPokeLoading(true);
        {/* loading symbol is visible to user */}
        setUserMessage('Your new Pokemon card is on the way! '); 
        
        try{

            const response = await axios.post("https://pokeapi-ptvv.onrender.com/Pokemon"); 
            {/* request to create card (i.e add a Pokemon to database) is sent to server using a POST call & won't resume until server responds. execution pauses again to translate API's raw data into a language the code can speak (i.e. a format it can access/interpret/manipulate/compile) */}

            console.log('Pokemon card was successfully created: ', response.data);
            setUserMessage('Your Pokemon card is ready!')
        }
        catch(error){

            setUserMessage('Error occurred while creating Pokémon card. Please ensure all fields are filled out correctly.');
            console.log('Error occurred while creating Pokemon card: ', error.response);
        }finally{

            setNewPokeLoading(false); 
            {/* ensures loading symbol is hidden when execution is finshed*/}
        }
    }

    return <div>

                <Button onClick={createPokeCard} disabled={newPokeLoading}>
                {/* while page is loading, the button can't be clicked */}

                    { newPokeLoading ? 'Creating...' : 'Create your Pokemon Card'}

                    { newPokeLoading && 
                        ( 
                            <div>

                                <Spinner animation='border' size='lg' />
                            
                                <div> 
                                    <span style={ {marginLeft: '6px'} }>Building Your Pokemon Card...</span>
                                </div>

                            </div>
                        )
                    } {/* 1st string displays if newPokeLoading state is true, 2nd string if not*/}

                </Button>

            <div aria-live='polite'>
            {/* announces loading status for screen readers */}

                {userMessage && <p>{userMessage}</p>}
                {/* displays if userMessage isn't null/undefined/empty string */}

            </div>
    </div>
}

export default CreateButton;