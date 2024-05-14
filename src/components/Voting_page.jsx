import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Voting_page = ({ handleVote }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [hasVoted, setHasVoted] = useState(localStorage.getItem('hasVoted') === 'true');
    const navigate = useNavigate();

    const handleVoteClick = () => {
        if (selectedOption) {
            if (!hasVoted) {
                handleVote(selectedOption);
                setHasVoted(true);
                localStorage.setItem('hasVoted', 'true');
                alert("Thank you for voting!");
                navigate('/home');
                

             
            } else {
                alert("You have already voted!");
                navigate('/register');
                
            }
        } else {
            alert("Please select a candidate before voting!");
        }
    };

    return (
        <div className='voting_container'>
            <h2 className='form_container'>Voting Board</h2>
            <div className='form_container'>
                <label>
                    <input type="radio" name="option" value="Candidate 1" onChange={() => setSelectedOption("Candidate 1")} />
                    Candidate 1
                </label>
            </div>
            <div className='form_container'>
                <label>
                    <input type="radio" name="option" value="Candidate 2" onChange={() => setSelectedOption("Candidate 2")} />
                    Candidate 2
                </label>
            </div>
            <div className='form_container'>
                <label>
                    <input type="radio" name="option" value="Candidate 3" onChange={() => setSelectedOption("Candidate 3")} />
                    Candidate 3
                </label>
            </div>
            <div className='form_container'>
                <label>
                    <input type="radio" name="option" value="Candidate 4" onChange={() => setSelectedOption("Candidate 4")} />
                    Candidate 4
                </label>
            </div>
            
            <p className='form_container'>Selected option: {selectedOption}</p>
            <button  onClick={handleVoteClick}>Vote</button>
        </div>
    );
};

export default Voting_page;
