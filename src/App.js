import React from 'react'
import './App.css'
import { Candidates } from './Candidates';
import Search from './Search'
import CandidateList from './CandidateList'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'
import UbiInfo from './UBIInfo'
import Navbar from './Navbar'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Candidates: [],
      searchField: ''
    }
  }
  componentDidMount() {
    this.setState({Candidates: Candidates})
  }
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }
  render() {
    const filteredCandidates = this.state.Candidates.filter( candidates => {
      return candidates.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div>
          < Navbar />
          < UbiInfo />
          < Search searchChange={this.onSearchChange} />
          <div id="profile-cards">
          <div class="container1">
          <h1 class="heading">Meet the Candidates</h1>
          <div class="card-wrapper">
          <p>Candidates</p>
          </div>
          </div>
          </div>
        <div>
          <ErrorBoundary>
            <Scroll>
              < CandidateList Candidates={filteredCandidates} />
            </Scroll>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default App