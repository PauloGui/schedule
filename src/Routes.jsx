import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import { Content } from './components/template/Content'
import { EditContact } from './components/template/EditContact'
import { NewContact } from './components/template/NewContact'

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Content} />
            <Route path="/newcontact" component={NewContact} />
            <Route path="/editcontact" component={EditContact} />
        </BrowserRouter>
    )
}

export default Routes