import { FaPlus } from "react-icons/fa";

type ProductCardProps = {
  name: string;
  price: number;
  discount: number;
};

export default function ProductCard({ name, price, discount }: ProductCardProps){
    return <div className="flex flex-col w-full aspect-3/4">
        {/* Images */}
        <div className="flex w-full aspect-square bg-gray-300"></div>
        {/* Name, Price, AddCart */}
        <div className="flex flex-row justify-between items-center">
            {/* Name and Price */}
            <div className="flex flex-col font-nunito">
                <div className="font-semibold">{name}</div>
                {discount > 0 ? <div className="flex gap-2"><p className="line-through text-gray-500">€{price}</p><p>€{Math.round(price * (1 - discount))}</p></div> : <div><p>€{price}</p></div>}
            </div>
            <p><FaPlus/></p>
        </div>
    </div>
}