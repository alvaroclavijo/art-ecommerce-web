import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
  return (
    <div>
        <h1>{`I am the item with id ${itemId}`}</h1>
    </div>
  )
}

export default ItemDetail;