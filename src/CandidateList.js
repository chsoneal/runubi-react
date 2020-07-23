import React from 'react'
import Candidate from './Candidate'

const CandidateList = ({Candidates}) => {
    return (
        <div>
            { Candidates.map((candidate, i) => {
                return(
                    <Candidate
                    key = {i}
                    name = {Candidates[i].name}
                    district = {Candidates[i].district}
                    state = {Candidates[i].state}
                    src = {Candidates[i].src}
                    about = {Candidates[i].about}
                    href = {Candidates[i].href}
                    />
                )
            })}
        </div>
    )
}

export default CandidateList