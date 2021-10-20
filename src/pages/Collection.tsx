import React, { useState, useEffect } from 'react';
import RenderCard from '../components/render-card/RenderCard';

import { fetchCollection, ICard } from '../lib/collection';

import './Collection.css';

export const Collection = () => {
  const [collection, setCollection] = useState<null | ICard[]>(null);

  useEffect(() => {
    fetchCollection()
      .then(setCollection)
      .catch(console.error);
  }, []);

  if (!collection) {
    return <h3>Loading...</h3>;
  }

  if (!collection.length) {
    return <h3>Empty collection</h3>;
  }

  return <RenderCard card={collection[0]} />;
};
