import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'


import TasksTravels from '../components/TasksTravels'
import AddTask from '../components/AddTasks'
import AddBusinessTravel from '../components/AddBusinessTravel'
import EditTask from '../components/EditTasks'
import EditTravel from '../components/EditTravel.js'
import PageNotFound from '../components/PageNotFound'
import Help from '../components/Help'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TasksPage from '../components/TasksPage'
import TravelsPage from '../components/TravelsPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={TasksTravels} exact={true}/>
            <Route path="/taskspage" component={TasksPage} />
            <Route path='/travelspage' component={TravelsPage} />
            <Route path="/addtask" component={AddTask} />
            <Route path="/addbusinesstravel" component={AddBusinessTravel} />
            <Route path="/edittask/:id" component={EditTask} />
            <Route path ="/edittravel/:id" component={EditTravel} />
            <Route path="/contact" component={Contact} />
            <Route path="/help" component = {Help}/>
            <Route component={PageNotFound} />
        </Switch>
        <Footer/>
    </div>
    
</BrowserRouter>
)


export default AppRouter;