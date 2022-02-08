import {Button, Modal, Form} from 'react-bootstrap'

export default function ChangeCardSetModal({show, handleClose, currentOption, setCurrentOption}){
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Change Card Set</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select card set</Form.Label>
                        <Form.Control as="select" value={currentOption} onChange={setCurrentOption}>
                            <option value={'people'}>People</option>
                            <option value={'starships'}>Starships</option>
                            <option value={'vehicles'}>Vehicles</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}