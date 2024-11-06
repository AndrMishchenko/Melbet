import logo from './logo.svg';
import './App.css';
import img from './img/1.png';
import img1 from './img/2.png';
import React, { useState } from 'react';

function App() {
  const [id, setID] = useState('');
  const [enterDep, setEnterDep] = useState('');
  const [visibleDep, setVisibleDep] = useState('')

  const click = () => {
    setVisibleDep(enterDep);
  };

  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={img} alt="Logo" />
        <img src={img1} className='logout' alt="Logout" />
      </div>
      <div className='main'>
        <button>Player Search</button>
        <button>Verify Data</button>
        <button>Bonus Programs</button>
        <button>Player Accounts</button>
        <button>Player History</button>
        <button>Reports & Analytics</button>
        <button>Settings</button>
      </div>
      <h2>Player Search</h2>
      <div className='search-block'>
        <div className='text'>Enter user ID:</div>
        <input
          type='text'
          value={id}
          onChange={(e) => setID(e.target.value)}
          placeholder='Enter ID'
        />
        <button >Search</button>
        <div className='enterDep'>
          <input
            type='text'
            value={enterDep}
            onChange={(e) => setEnterDep(e.target.value)}
            placeholder='Enter Dep'
          ></input>
          <button onClick={click}>Click</button>
        </div>
      </div>
      <div>
        <div className='useInf'>User ID information:</div>
        <ul>
          <li className='text'>User ID: <span className='id'>{id}</span></li>
          <li className='text'>Username: *******</li>
          <li className='text'>Registration Date: ********</li>
          <li className='text'>Account Status: <span className='acc'>Active</span></li>
          <li className='text'>Winning: <span className='winn'>Active</span></li>
          <li className='text'>First deposit: <span className='dep'>{visibleDep}</span></li>
          <li className='text'>Status first deposit: <span className='needdep'>No</span></li>
          <li className='text'>Calculated winnings: <span className='winn'>245 678</span></li>
          <li className='text'>Account Verification: ********</li>
          <li className='text'>VIP Status: <span className='needdep'>No</span></li>
          <li className='text'>Total Deposits: ********</li>
          <li className='text'>Total Withdrawals: ********</li>
          <li className='text'>Bonus Balance: *********</li>
          <li className='text'>Bonus: <span className='needdep'>No</span></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
