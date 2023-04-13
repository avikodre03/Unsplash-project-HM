import React, { useContext, useEffect } from 'react'
import './Gallary.css'
import { mainContext } from '../Context'

const Gallary = () => {
    const { searchValue, setphotos, photos } = useContext(mainContext)
    useEffect(() => {

        const data = async () => {

            const Responce = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=7dQXxXPcQFfpfkkjdklsYxp0mGWT9aviICNbI6N3vMQ`)
            const data = await Responce.json()
            console.log("data", data.results);
            setphotos(data.results)
        }
        data()
    }, [searchValue])
    return (
        <div className='Gallary'>
       
            {photos.map((ele) => {
                return(

                <>
                {console.log(ele && ele.urls.full)}
                    <div className="card">
                        <img className='cardImg'
                            src={ele && ele.urls.full} alt=""
                        />
                        <div className="cardOverlay">
                            <div className="cardTitel">
                                { ele && ele.alt_description}
                            </div>
                            <div className="posterImage_release_date_rating">
                                <p> { ele && ele.created_at}</p>
                            </div>

                        </div>
                    </div>
                </>
                )
            })}

        </div>
    )
}

export default Gallary