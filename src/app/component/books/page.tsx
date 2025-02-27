"use server"
import React from "react";
import './books.css'
import Image from "next/image";

function books({books,bookName,bookPrice} : {books:string | any , bookName:String,bookPrice:String}) {
    return (
        
        <>
           
                <div className="bookCard">
                <div className="bookimg">
                    <Image src={books} alt={"book "} className="bkimg"/>
                  </div>
                    
                <div className="bookdescription">
                    <h1>{bookName}</h1>
                    <h3>Oda the Cook</h3>
                    <p> * * * * *</p>
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