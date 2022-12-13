import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);
  
    return ( // usar classname , no solo class, dentro de jsx
        <>
            <h3>{category}</h3>
            {
                isLoading? <h2>asdasd</h2>:null
            }
            <div className="card-grid">
            {
                images.map(img=>(
                    <GifItem key={img.id} {...img} />
                ))
                }
            </div>
            
        </>
    )
}
