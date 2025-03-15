import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import InputGroup from 'react-bootstrap/InputGroup';

function PokeForm() {
    return(
        <Form>{/* utilizes flex-inline display*/}

            <Row>
                <Col xs='auto'>

                    <InputGroup className='pokeName'>

                        <InputGroup.Text>Name</InputGroup.Text>
                        <Form.Control placeholder='Bulbasaur' id='nameDescription'/>

                    </InputGroup>

                    <small id="nameDescription" className="form-text text-muted">
                        The name of the specific Pokémon.
                    </small>

                </Col>
            </Row>

            <Row>
                <Col xs='auto'>

                    <InputGroup className='pokeImgURL'>

                        <InputGroup.Text>Image URL</InputGroup.Text>
                        <Form.Control placeholder='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png' id='imgURLDescription'/>

                    </InputGroup>

                    <small id="imgURLDescription" className="form-text text-muted">
                        A hyperlink that redirects the user to a picture of the specific Pokémon.
                    </small>

                </Col>
            </Row>


            <Row>
                <Col xs='auto'>

                    <InputGroup className='pokeFunFact'>
                    
                        <InputGroup.Text>Fun Fact</InputGroup.Text>
                        <Form.Control placeholder='There is a plant seed on its back right from the day this Pokémon is born.' id='funFactDescription'/>

                    </InputGroup>

                    <small id="funFactDescription" className="form-text text-muted">
                        A random detail about the specific Pokémon.
                    </small>

                </Col>
            </Row>

            <Row>
                <Col xs='auto'>

                    <InputGroup>

                        <InputGroup.Text>Type</InputGroup.Text>
                        <Form.Control placeholder='Grass' id='tyeDescription'/>

                    </InputGroup>

                    <small id="typeDescription" className="form-text text-muted">
                        A category that defines the specific Pokémon’s abilities, strengths, and weaknesses in battles.
                    </small>

                </Col>
            </Row>

        </Form>
    );
}

export default PokeForm;

//Stretch Goals
//modify to include the other type for pokemon with more than one type; maybe have one side of the card reflect the color of one type and the other side reflect the second type?
//card preview populates as user inputs info

//Questions
//what's the difference between floating labels and the above? They look the same to me in the examples on React Bootstrap
//diff between aria labels and alt text? use cases?