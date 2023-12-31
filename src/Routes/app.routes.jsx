import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'
import { AddDish } from '../pages/AddDish'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/addDish/" element={<AddDish />} />
        </Routes>
    )
}