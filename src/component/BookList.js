import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import uuid from 'uuid';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books, setBooks } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    const [bookName, setBookName] = useState('');

    const addBook = () => {
        if (bookName !== '') {
            setBooks([
                ...books, 
                {title: bookName, id: uuid()}
            ]);
        }
        setBookName('');
    }
    
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return(
                        <li key={ book.id } style={{ background: theme.ui }}>{ book.title }</li>    
                    );
                })}
            </ul>
            <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            <button onClick={() => addBook()}>Add Book</button>
        </div>
    );
}
 
export default BookList;