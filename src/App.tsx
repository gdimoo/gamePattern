import React, { Fragment } from 'react';
import {Button, Grid, Header, Heading, Section, YouWon} from "./components";
import {Game, IGame} from "./containers/Game";
import {KeyboardEventHandler} from "./containers/KeyboardEventHandler";
import {CommandManager, ICommandManager} from "./containers/CommandManager";
import ButtonAppBar from "./components/Appbar"
const renderGameChildren = (
    rows: number[][],
    selectedTile: number[],
    isWinning: boolean,
    game: IGame
) => {
    if (isWinning) {
        return <YouWon/>
    }

    return (
        <React.Fragment>
        <CommandManager>
            {renderCommandManagerChildren(rows, selectedTile, isWinning, game)}
        </CommandManager></React.Fragment>

    )
}

const renderCommandManagerChildren = (
    rows: number[][],
    selectedTile: number[],
    isWinning: boolean,
    game: IGame
) => (commandManager: ICommandManager, disableUndo: boolean) => (
    <React.Fragment>
        <Grid rows={rows} selectedTile={selectedTile} selectTile={game.selectTile}/>
        <Button primary onClick={commandManager.undo} disabled={disableUndo}>ย้อนกลับ</Button>

        <KeyboardEventHandler commandManager={commandManager} game={game}/>
    </React.Fragment>
)

const App = () => {
    return (
        <React.Fragment>
<ButtonAppBar />
        <Section>
            <Header>
                <Heading level={1}>เรียงหมายเลขให้ถูกต้อง</Heading>
                <Heading level={2}>คลิ๊กที่หมายเลขที่ต้องการ และใช้ลูกศรบนคีย์บอร์ดเพื่อย้ายตำแหน่ง</Heading>
                
            </Header>
            <Game>{renderGameChildren}</Game>
        </Section>
        </React.Fragment>
    )
}


export default App;
