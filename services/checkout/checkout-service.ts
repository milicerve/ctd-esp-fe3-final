import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";


export const postCheckOut = async (data: CheckoutInput) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const req = await fetch(`https://ctd-esp-fe3-final-three-fawn.vercel.app/api/checkout-orden`, options)
    
    return await req.json();
}