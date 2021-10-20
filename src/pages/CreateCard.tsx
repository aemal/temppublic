import React, { useState } from 'react';
import { postPlayer } from '../lib/collection';
import DatePicker from 'react-datepicker';

import './CreateCard.css';
import 'react-datepicker/dist/react-datepicker.css';


export const CreateCard = () => {
    const [player, setPlayer] = useState({
        firstname: '',
        lastname: '',
        birthday: new Date(),
    });

    return (
        <form onSubmit={e => {
            e.preventDefault();

            postPlayer({
                ...player,
                birthday: player.birthday.toISOString()
            });
        }}>
            <div className='input-container'>
                <label htmlFor='firstname'>First name</label>
                <input type='text' id='firstname' value={player.firstname} onChange={e => setPlayer((prevState) => ({ ...prevState, firstname: e.target.value }))} />
            </div>
            <div className='input-container'>
                <label htmlFor='lastname'>Last name</label>
                <input type='text' id='lastname' value={player.lastname} onChange={e => setPlayer((prevState) => ({ ...prevState, lastname: e.target.value }))} />
            </div>
            <div className='input-container'>
                <label>Date</label>
                <DatePicker selected={player.birthday} onChange={(date) => setPlayer((prevState) => ({ ...prevState, birthday: date }))} />
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
};
