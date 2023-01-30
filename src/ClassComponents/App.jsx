import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
    }
    changelanguage = (data) => {
        this.setState({ language: data })
    }

    changeSearch = (data) => {

        this.setState({ search: data })
    }
    render() {
        return (

            <>

                <BrowserRouter>
                    <Navbar changelanguage={this.changelanguage} changeSearch={this.changeSearch} />
                    <Routes>
                        <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path='/All' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics" />} />
                        <Route path='/Crime' element={<Home search={this.state.search} language={this.state.language} q="Crime" />} />
                        <Route path='/Education' element={<Home search={this.state.search} language={this.state.language} q="Education" />} />
                        <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science" />} />
                        <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology" />} />
                        <Route path='/Jokes' element={<Home search={this.state.search} language={this.state.language} q="Jokes" />} />
                        <Route path='/Games' element={<Home search={this.state.search} language={this.state.language} q="Games" />} />
                        <Route path='/Fifa' element={<Home search={this.state.search} language={this.state.language} q="Fifa" />} />
                        <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket" />} />
                        <Route path='/Fifa' element={<Home search={this.state.search} language={this.state.language} q="Fifa" />} />
                        <Route path='/World' element={<Home search={this.state.search} language={this.state.language} q="World" />} />
                        <Route path='/Covid' element={<Home search={this.state.search} language={this.state.language} q="Covid" />} />

                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
        )
    }
}