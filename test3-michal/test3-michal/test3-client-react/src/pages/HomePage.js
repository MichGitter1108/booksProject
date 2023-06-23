import React, { useState, useEffect } from 'react';
import FormComponent from '../components/FormComponent';
import TableComponent from '../components/TableComponent';
import { GetRequest } from '../services/API';
import axios from 'axios';

function HomePage() 
{
    const [AllAuthorsArray, setAllAuthorsArray] = useState([]);
    const [AllBooksArray, setAllBooksArray] = useState([]);


    //the parameters for inserting
    const [SelectedAuthorID, setSelectedAuthorID] = useState(0);
    const [InsertedBookName, setInsertedBookName] = useState("");
    const [InsertedBookPageNum, setInsertedBookPageNum] = useState(0);
    const [InsertedBookPrice, setInsertedBookPrice] = useState(0);

    useEffect(() => {
        getAllAuthors();
        getAllBooks();
    }, []);

    let getAllBooks = async() =>
    {
        let allBooks = await GetRequest('getAllBooks');
        setAllBooksArray(allBooks);
        console.log("books:" , AllBooksArray);
    }

    let getAllAuthors = async() =>
    {
        let allAuthors = await GetRequest('getAllAuthors');
        setAllAuthorsArray(allAuthors);
        console.log("Authors:", AllAuthorsArray);
    }

    let insertBookToDatabase = async() =>
    {
        console.log("inserted book: ", SelectedAuthorID, InsertedBookName, InsertedBookPageNum, InsertedBookPrice);
        let insertBook = await GetRequest(`insertBook?authorID=${SelectedAuthorID}&bookName=${InsertedBookName}&pageNum=${InsertedBookPageNum}&bookPrice=${InsertedBookPrice}`);
        setSelectedAuthorID(0);
        setInsertedBookName("");
        setInsertedBookPageNum(0);
        setInsertedBookPrice(0);
    }

    return (
        <>
            <div className='row p-4'>
                <div className='col-4'>
                    <img src="https://upload.wikimedia.org/wikipedia/he/thumb/b/bc/Steimatzki.svg/1200px-Steimatzki.svg.png" alt="סטימצקי"/>
                </div>
                <div className = 'col-4 mt-4'>
                    <h2 style={{textAlign: "center"}}>My Books Shop 📖</h2>
                </div>
            </div>

            <hr/>

            <div className='row p-4'>
                <div className='col-4'>
                    <FormComponent authorsProp = {AllAuthorsArray} authorIDProp = {SelectedAuthorID} setauthorIDFnProp = {setSelectedAuthorID}
                    booknameProp = {InsertedBookName} setBooknameFnProp = {setInsertedBookName}
                    bookpageNum= {InsertedBookPageNum} setBookpageNumFn = {setInsertedBookPageNum}
                    bookprice = {InsertedBookPrice} setBookpriceFn = {setInsertedBookPrice}/>
                    <button type="button" className="btn btn-success" onClick = {() => insertBookToDatabase()}>הכנס ספר</button>
                </div>
                <div className='col-8'>
                    <TableComponent booksArrayProp = {AllBooksArray} authorsArrayProp = {AllAuthorsArray}/>
                </div>
            </div>
        </>
    )
}

export default HomePage;