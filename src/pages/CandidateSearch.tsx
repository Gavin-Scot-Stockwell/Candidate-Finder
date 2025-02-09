// TODO: Create an interface for the Candidate objects returned by the API
import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import type Candidate  from "../interfaces/Candidate.interface";
import Switch from "../components/Switch";
//import Hover from "../components/Hover";
import userTemp from "../styles/userTemp";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [sumSave, setSumSave] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem('candidates');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const fetchData = async () => {
    try {
      const setData = await searchGithub();
      const candidatePromises = setData.map((item: Candidate) => searchGithubUser(item.login));
      const candidateData = await Promise.all(candidatePromises);

      const mappedData: Candidate[] = candidateData.map((data: Candidate) => ({
        login: data.login,
        id: data.id,
        avatar_url: data.avatar_url,
        url: data.url,
        html_url: data.html_url,
        organizations_url: data.organizations_url,
        name: data.name,
        company: data.company,
        location: data.location,
        email: data.email,
      }));

      const filteredData = mappedData.filter((data) =>
        data.id &&
        data.login &&
        data.avatar_url &&
        data.html_url &&
        data.organizations_url &&
        data.name &&
        data.company &&
        data.location &&
        data.email
      );

      console.log('Filtered Data:', filteredData);

      setCandidates((prevCandidates) => [...prevCandidates, ...(isSwitchOn ? filteredData : mappedData)]);

    } catch (error) {
      console.log('An error occurred', error);
    }
  };

  const handleSave = (candidate: Candidate) => {
    setSumSave((prevSumSave) => [...prevSumSave, candidate]);
  };

  const handleRemove = (id: number) => {
    setCandidates((prevCandidates) => prevCandidates.filter(candidate => candidate.id !== id));
  };

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(sumSave));
  }, [sumSave]);


  
  return (
    <div>
      <h1>Search for a Github User</h1>


      
        Filter mode <Switch isOn={isSwitchOn} handleToggle={toggleSwitch} />
   
      <button onClick={fetchData}>Search</button>
      <p>Note, even if the users don't show up, on a click it still searches</p>
      <ul>
        {candidates.map((candidate) => (
          <div id={`${candidate.id}`} key={candidate.id} style={userTemp.user}>
            <img style={userTemp.img} src={candidate.avatar_url} alt={candidate.login} width="50" />
            <p style={userTemp.row}>Username: {candidate.login} </p>
            <p style={userTemp.row}>Name: {candidate.name}</p>
            <p style={userTemp.row}>Location: {candidate.location}</p>
            <p style={userTemp.row}>Organizations: {candidate.organizations_url}</p>
            <p style={userTemp.row}>Email: {candidate.email}</p>
            <p style={userTemp.row}>Profile: <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.html_url}</a></p>
            <p style={userTemp.row}>Company: {candidate.company}</p>
            <button onClick={() => handleSave(candidate)} style={{ backgroundColor: 'green', borderColor: 'black', borderStyle: 'solid' }}>+</button>
            <button onClick={() => handleRemove(candidate.id)} style={{ backgroundColor: 'red', borderColor: 'black', borderStyle: 'solid' }}>-</button>
          </div>
        ))}
      </ul>
      <ul>

      </ul>
    </div>
  );

};

export default CandidateSearch;