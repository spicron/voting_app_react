
import React from 'react';

const Admin_page = ({ votingResults }) => {
    const hasVotes = Object.values(votingResults).some(count => count > 0);

    return (
        <div>
            
                <div className="container">
                   <h2>Admin</h2>
                  {hasVotes ? (
                    <ul className='admin_ul'>
                        {Object.entries(votingResults).map(([candidate, count]) => (
                            <li key={candidate}><label htmlFor="">{candidate} vote count: {count}</label></li>
                        ))}
                    </ul>
                  ) : (
                    <p>No votes found.</p>
                  )}
                </div>
            
        </div>
    );
};

export default Admin_page;

