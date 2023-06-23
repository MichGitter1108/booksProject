import React from 'react';

function FormComponent(props) 
{
    console.log("component props: ", props);

    return (
        <div>
            <form>
                <label className="h3">הוסף ספר למאגר</label>
                <div className="form-group mt-3">
                        <label htmlFor="exampleFormControlSelect2">בחר סופר</label>
                            <select className="form-control" id="exampleFormControlSelect2" value = {props.authorIDProp} onChange={(e) => props.setauthorIDFnProp(e.target.value)}>
                                <option value="0">בחירה...</option>
                                { props.authorsProp.map( singleA => {
                                    return <option key={singleA.ID} value={singleA.ID}>{singleA.FullName}</option>
                                })}
                            </select>
                </div>

                <div className="mb-3 mt-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">שם הספר</label>
                    <input type="text" className="form-control" value = {props.booknameProp} onChange = {(e) => props.setBooknameFnProp(e.target.value)}/>
                </div>
                <div className="mb-3 mt-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">מספר עמודים</label>
                    <input type="number" className="form-control" value = {props.bookpageNum} onChange = {(e) => props.setBookpageNumFn(e.target.value)}/>
                </div>
                <div className="mb-3 mt-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">מחיר הספר</label>
                    <input type="number" className="form-control" value = {props.bookprice} onChange = {(e) => props.setBookpriceFn(e.target.value)}/>
                </div>
                </form>
        </div>
    )
}

export default FormComponent;