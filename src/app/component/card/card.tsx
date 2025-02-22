import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import './card.css'
import Image from 'next/image';

export default function card({ booksImg, bookName, bookPrice }: { booksImg: string | StaticImport; bookName: string; bookPrice: string; }) {
 
    return (
      <>
        <div className="card">
          <div className="card-container">
            <Image src={booksImg} alt="Avatar" className="card-image" />
          
            <p>{bookName}</p>
            <p>{bookPrice}</p>
            <button className='btn'> Add To Cart +</button>

          </div>
       
      </div>
      </>
    );
  }
  