import React from 'react';

const List = ({ todo }) => {
    return (
        <ol>
            {todo?.map((item) => (
                <li key={item.id}>{item?.name}</li>
            ))}
        </ol>
    );
};

export default List;
