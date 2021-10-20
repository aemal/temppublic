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
    const [error, setError] = useState<null | string>(null);

    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            setError(null);

            try {
                return await postPlayer({
                    ...player,
                    birthday: player.birthday.toISOString()
                });
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        }}>
            {error && <h3 className='mb2'>{error}</h3>}
            <div className='input-container'>
                <label htmlFor='firstname'>First name</label>
                <input required minLength={2} type='text' id='firstname' placeholder='John' value={player.firstname} onChange={e => setPlayer((prevState) => ({ ...prevState, firstname: e.target.value }))} />
            </div>
            <div className='input-container'>
                <label htmlFor='lastname'>Last name</label>
                <input required minLength={2} type='text' id='lastname' placeholder='Doe' value={player.lastname} onChange={e => setPlayer((prevState) => ({ ...prevState, lastname: e.target.value }))} />
            </div>
            <div className='input-container'>
                <label>Date</label>
                <DatePicker selected={player.birthday} onChange={(date) => setPlayer((prevState) => ({ ...prevState, birthday: date }))} />
            </div>

            <button type='submit'>Submit</button>
        </form>
    );
};
