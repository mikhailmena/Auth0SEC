
import '../frontend/frontend.css';

import  {CurrentUser}  from '../frontend/CurrentUser'
import  {NewCharacter}  from '../frontend/Newcharacter'
import  {CharacterSheet}  from '../frontend/Charactersheets'
import  {Tutorial}  from '../frontend/Tutorial'


function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
      
<CurrentUser/>
<CharacterSheet/>
<NewCharacter/>
<Tutorial/>

        
      </header>
    </div>
  );
}

export default MainPage;
