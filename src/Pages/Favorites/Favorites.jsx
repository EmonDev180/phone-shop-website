import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0)
    const [noFound, setNofound] = useState(false);
    const [isShow,setIsShow] = useState(false)

    useEffect(() => {

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if (favoriteItems) {

            setFavorites(favoriteItems)
            const total = favoriteItems.reduce((preValue,currentItem) => preValue + currentItem.price,0);

           setTotalPrice(total)
        }
        else {

            setNofound('No data found');

        }



    }, [])

    console.log(favorites);

    const handleAddRemove = () =>{

        localStorage.clear(favorites);
        setFavorites([])
        setNofound('No data found')



    }

    console.log(isShow);



    return (
        <div>
            {noFound ? <p>No data Found</p>
            
            :

            <div>
                {favorites.length > 0 && <button className="px-5 bg-green-200 mx-auto block mt-4" onClick={handleAddRemove}>Delete All favorite </button>}
                    <h1 className="text-2xl">totalPrice:{totalPrice}</h1>
                <div className="grid grid-cols-2 gap-5"> 

                    {
                         isShow ?   favorites.map(favorite => <FavoritesCard key={favorite.id} favorite={favorite}></FavoritesCard>)
                    
                         :
    
                        favorites.slice(0,4).map(favorite => <FavoritesCard key={favorite.id} favorite={favorite}></FavoritesCard>)
                    }
                </div>
                <button className="px-5 bg-green-200 mx-auto block mt-12" onClick={()=> setIsShow(!isShow)} >{isShow ?"See less" : "See more" } </button>
                </div>}
        </div>
    );
};

export default Favorites;