import img1 from '@/assets/img/demo-products/dslr-camera-black.jpg';
import { toggleProductToView } from "@/redux/features/productActions/productActions";
import { useDispatch } from "react-redux";


// TODO: Have to delete this.
const demoData = {
    id: 13,
    name: '8K Camera',
    image: img1.src,
    priceMin: 25,
    priceMax: 29,
    rating: 4,
    reviewCount: 18,
    inStock: true,
    discountPercentage: 30,
}

export default function useViewProductModal() {
    const dispatch = useDispatch()

    const viewProduct = () => {
        dispatch(toggleProductToView(demoData))
        document.body.style.overflow = "hidden"; // prevent scrolling.
    }

    return { viewProduct };
}
