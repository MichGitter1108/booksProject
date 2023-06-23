import React from 'react';

function TableComponent(props) 
{
    console.log(props);

    let findBookAuthorNameByID = (aID) =>
    {
        let foundAuthorName = props.authorsArrayProp.find(singleA => singleA.ID == aID);
        return foundAuthorName;
    }

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Pages</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    props.booksArrayProp && props.booksArrayProp.map(singleBook =>
                    <tr key = {singleBook.bookID}>
                        <td>{singleBook.bookID}</td>
                        <td>{singleBook.bookName}</td>
                        <td>{ props.authorsArrayProp && findBookAuthorNameByID(singleBook.authorID)}</td>
                        <td><button type = "button" className='btn btn-danger'>delete book</button></td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;