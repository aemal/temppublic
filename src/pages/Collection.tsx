import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RenderCard from '../components/render-card/RenderCard';

import { fetchCollection, ICard } from '../lib/collection';

import './Collection.css';
import pen from '../assets/pen.svg';

export const Collection = () => {
  const [collection, setCollection] = useState<null | ICard[]>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetchCollection()
      .then(setCollection)
      .catch(error => {
        console.error(error);

        setError(error.message);
      });
  }, []);

  if (error) {
    return <h3>{error}</h3>;
  }

  if (!collection) {
    return <h3>Loading...</h3>;
  }

  if (!collection.length) {
    return <h3>Empty collection</h3>;
  }

  return (
    <div>
      <div className='in-column align-center mb6 mt2 width100 justify-center'>
        <h4 className='mb1'>Order by</h4>
        <div className="sort-button-collection">
          <button
            onClick={() => setCollection((cards) => [...cards.sort((a, b) => new Date(b.player.birthday).valueOf() - new Date(a.player.birthday).valueOf())])}
          >
            Date of birth
        </button>
          <button
            onClick={() => setCollection((cards) => [...cards.sort((a, b) => a.player.firstname.localeCompare(b.player.firstname))])}
          >
            First name
          </button>
          <button
            onClick={() => setCollection((cards) => [...cards.sort((a, b) => a.player.lastname.localeCompare(b.player.lastname))])}
          >
            Last name
          </button>
        </div>
      </div>
      <div className='collection'>
        {collection.map((card, index) => <RenderCard key={index} card={card} />)}
      </div>
      <Link to='/create-card' className='create-card-link'>
        <img src={pen} alt="pen" />
      </Link>
    </div>
  );
};
