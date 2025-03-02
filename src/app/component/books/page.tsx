"use server"
import React from "react";
import './books.css'
import Image from "next/image";

function books({books,bookName,bookPrice,authorName,bookRating} : {books:string | any , bookName:string,bookPrice:string , authorName:string,bookRating:string}) {
    return (
        
        <>
           
                <div className="bookCard">
                <div className="bookimg">
                    <Image src={books} alt={"book "} className="bkimg"/>
                  </div>
                    
                <div className="bookdescription">
                    <h1>{bookName}</h1>
                    <h3>{authorName }</h3>
                    <p> { bookRating}</p>
                    <div>
                        <h2>{bookPrice}</h2>
                        <button>Buy...!</button>
                    </div>
                
                  </div>
                  
                   
                   
             
            </div>
        </>
    )
}
export default books;