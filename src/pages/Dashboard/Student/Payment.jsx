import { useParams } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const payment_api_key = import.meta.env.VITE_Payment_Gateway_PK;

const stripePromise = loadStripe(payment_api_key);

const Payment = () => {
    const id = useParams();
    const [cart] = useCart();
    
    const product = cart.find((obj) => obj._id === id.id); 
    
    let price = null;

    if(product){
        price = product.price;
    }
    

    return (
        <div>
            
        {
            product && 
            <Elements stripe={stripePromise}>
                <CheckOutForm product={product} price={price} />
            </Elements>
        }

        </div>
    );
};

export default Payment;