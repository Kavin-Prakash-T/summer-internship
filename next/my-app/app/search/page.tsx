'use client'

import { useEffect, useState } from "react"

const page = () => {

    const foods = [
        {
            id: 1,
            name: "vada",
            price: 10,
            category: "veg"
        },
        {
            id: 2,
            name: "biriyani",
            price: 20,
            category: "non-veg"
        },
        {
            id: 3,
            name: "idli",
            price: 15,
            category: "veg"
        }
    ]

    const [search, setSearch] = useState('')
    const [items, setItems] = useState(foods)
    const [category, setCategory] = useState('')
    const [sort,setSort]=useState("")
    useEffect(() => {
        let filtered_items = foods.filter((item) => item.name.includes(search) && item.category == category)
        setItems(filtered_items)
    }, [search, category,sort])

    useEffect(()=>{
    if (sort === "htl") {
           setItems( items.sort((a, b) => a.price - b.price))
        } else if (sort === "lth") {
            setItems(items.sort((a, b) => b.price - a.price))
        }
        else{
            setItems(items)
            return;
        }
        },[sort])
    return (
        <>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <h1>Category</h1>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
            </select>

             <select name="sort" id="sort" onChange={(e) => setSort(e.target.value)}>
                <option value=""></option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
            </select>

            <h1>Food Items</h1> 

            {items?.map((food) => (
                <div key={food.id}> 
                    <h2>{food.name}</h2>
                    <p>Price: ${food.price}</p>
                </div>
            ))
            }
        </>
    )
}

export default page