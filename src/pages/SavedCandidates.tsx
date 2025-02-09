//import React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import userTemp from '../styles/userTemp';

const SavedCandidates = () => {
  const saveSum = localStorage.getItem('candidates');
  const sumSave: Candidate[] = saveSum ? JSON.parse(saveSum) : [];

  return (
    <>
      <h1>Potential Candidates</h1>
      <ul>
        {sumSave.map((candidate) => (
          <div id={`${candidate.id}`} key={candidate.id} style={userTemp.user}>
          <img style={userTemp.img} src={candidate.avatar_url} alt={candidate.login} width="50" />
          <p style={userTemp.row}>Username: {candidate.login} </p>
          <p style={userTemp.row}>Name: {candidate.name}</p>
          <p style={userTemp.row}>Location: {candidate.location}</p>
          <p style={userTemp.row}>Organizations: {candidate.organizations_url}</p>
          <p style={userTemp.row}>Email: {candidate.email}</p>
          <p style={userTemp.row}>Profile: <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.html_url}</a></p>
          <p style={userTemp.row}>Company: {candidate.company}</p>
        </div>
        ))}
      </ul>
    </>
  );
};

export default SavedCandidates;