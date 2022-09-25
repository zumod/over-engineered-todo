import React, { memo, Fragment } from 'react';

const List = ({ todo, deleteTodo }) => {
    return (
        <ol>
            {todo?.map((item) => (
                <Fragment key={item.id}>
                    <li draggable>{item?.name}</li>
                    <button onClick={(e) => deleteTodo(item.id)}>X</button>
                </Fragment>
            ))}
        </ol>
    );
};

export default memo(List);
