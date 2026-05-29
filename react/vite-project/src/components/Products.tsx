import { useState, useEffect, type AnyActionArg } from 'react'

export default function Products() {

    type Product = {
        id: number,
        title: string,
        category: string,
        price: number
    }


    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null)


    async function fetchData() {
        try {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products);
            setLoading(false);

        } catch (error:any) {
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error &&
                products.map((p) => (
                    <div key={p.id}>
                        <p>{p.title}</p>
                        <p>{p.category}</p>
                        <p >{p.price}</p>
                    </div>
                ))
            }
        </>
    )
}
