/* @flow */

import React from 'react';

const PlaylistCard = ({ playlist }) => (
    <div className="card text-center">
        <img className="card-img-top" src={playlist.imageUrl} alt="Card top" />
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted text-truncate">
                {playlist.name}
            </h6>
            <p className="card-text">{playlist.owner}</p>
        </div>
    </div>
);

export default PlaylistCard;
