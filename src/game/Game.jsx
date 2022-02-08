import React, {useState} from 'react';
import {Button, Badge, Spinner} from 'react-bootstrap'
import ChangeCardSetModal from './ChangeCardSetModal';
import useCards from "./useCards";
import './Game.css';
import Card from './Card';

export default function Game({title}) {

    const initValue = 'people';
    const [compareType, setCompareType] = useState(initValue);
    const [showModal, setShowModal] = useState(false);
    const {play, setCurrComp, loading, player, computer, computerUncovered, selectedProperty, getProperties, playersTurn, reset} = useCards(initValue);
    console.log(player);
    const toggle = () => setShowModal(x => !x);

    function setCurrentOptionHandler(e) {
        const value = e.currentTarget.value;
        setCompareType(value);
        setCurrComp(value);
        setShowModal(false)
    }

    return (
        <>
            <h2 className={"header"}>{title}</h2>
            <div className={"info"}>
                <Button variant="primary" className={"header"} onClick={toggle}>
                    Current card set <Badge variant="light">{compareType}</Badge>
                </Button>
                {showModal && <ChangeCardSetModal show={showModal} handleClose={toggle} currentOption={setCurrComp} setCurrentOption={setCurrentOptionHandler}/>}
                {/* TODO Task 1 */}
                <h1 className={"header"}>
                    {playersTurn ? 'Your turn' : 'Computers turn'}
                </h1>
                <h1>{`Remaining player cards: ${player.length}`}</h1>
                <h1>{`Remaining computer cards: ${computer.length}`}</h1>
                <Button variant="primary" className={"header"} onClick={reset}>
                    Reset
                </Button>
            </div>
            {loading ? (
                <Spinner className={"header"} animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div className="cards">
                    {player[0] && (
                        <Card
                        currentItem={player[0]}
                        uncovered={true}
                        selectedProperty={selectedProperty}
                        onSelectProperty={play}
                        properties={getProperties()}
                        playersTurn={playersTurn}
                        />
                    )}
                    {computer[0] && (
                        <Card
                            currentItem={computer[0]}
                            uncovered={computerUncovered}
                            selectedProperty={selectedProperty}
                            properties={getProperties()}
                        />
                    )}
                </div>
            )}

        </>
    )
}