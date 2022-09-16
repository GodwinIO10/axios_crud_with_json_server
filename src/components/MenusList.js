import React, {useState, useEffect} from 'react'
import server from "../menu/menuServer"  // server is a random name



const MenusList = () => {

    const [posts, setPosts] = useState([])


    useEffect(() => {

        const fetchPost = async () => {
            try {
                const response = await server.get("/posts")
                console.log (response.data)
                setPosts(response.data)

            } catch (err) {
                if (err.response){
                    // not in the 200 response range
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        fetchPost()

    }, [])

    return (
        <div>
            {
                posts.map(food => (
                        <div className="box" key={food.id}>
                            {food.name}{food.prices && food.prices.map( data => ( // do this when you have objects within array
                                <div>Price is {data.small}</div>
                            ))}
                            {food.chef && food.chef.map( data => ( // do this when you have objects within array
                                <div>
                                    {data.nom}
                                </div>
                            ))}
                            {food.description}<hr />
                        </div>
                    ))
            }
        </div>
    )
}

export default MenusList



