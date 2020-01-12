import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'the way of kinds', id: 2},
        {title: 'flickering pixels', id: 3},
        {title: 'the final empire', id: 4}
    ]);

    return (
        <BookContext.Provider value={{books, setBooks }}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;