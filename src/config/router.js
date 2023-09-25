import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ResponsiveDrawer from '../screens/dashboard'
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ResponsiveDrawer />} />
            </Routes>
        </Router>
    )
}
export default AppRouter