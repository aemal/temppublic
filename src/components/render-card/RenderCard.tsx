import React from 'react';
import { ICard } from '../../lib/collection';
import LazyLoad from 'react-lazyload';
import './RenderCard.css';

interface Props {
    card: ICard;
}

const RenderCard: React.FC<Props> = ({ card, ...props }) => {
    const fullName = `${card.player.firstname} ${card.player.lastname}`;
    return (
        <LazyLoad classNamePrefix='card' placeholder='loading' preventLoading once {...props}>
            <img src={`http://localhost:8002/${card.id}.jpg`} alt={fullName} />
            <span>{fullName} - {new Date(card.player.birthday).toLocaleDateString()}</span>
        </LazyLoad>
    );
}

export default RenderCard;
