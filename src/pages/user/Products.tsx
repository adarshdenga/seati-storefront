import { useState, useEffect } from "react"
import supabase from "../../utils/supabase"
import ProductCard from "../../components/ProductCard"

export default function Products(){

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const { data} = await supabase.from('products').select()
            setProducts(data)
            console.log(data)
        }
        getProducts()
    }, [])

    return <div className="flex flex-row w-screen">
        <div className="flex flex-col fixed h-screen w-1/4 p-16 pt-32">
        FILTERS
        </div>
        <div className="flex flex-col ml-[25%] w-3/4 h-screen overflow-y-auto p-24 pt-32">
            <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} name={product.name} price={product.price} discount={product.discount} />
                ))}
            </div>
        </div>
    </div>
}