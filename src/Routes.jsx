import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { List } from './pages/List'
import { AddContact } from './pages/AddContact'
import { EditContact } from './pages/EditContact'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={List} />
            <Route path="/newcontact" component={AddContact} />
            <Route path="/editcontact" component={EditContact} />
        </BrowserRouter>
    )
}

export default Routes