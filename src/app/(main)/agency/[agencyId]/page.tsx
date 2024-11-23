import React from "react";
import {stripe} from '@/lib/stripe';
import { addOnProducts } from "@/lib/constants";
import { db } from '@/lib/db'

type Props ={
    params : {agencyId :string}
}

const page = async ({ params }: Props) => {
    //CHALLENGE : Create the add on  products

    const addOns = await stripe.products.list({
      ids: addOnProducts.map((product) => product.id),
      expand: ['data.default_price'],
    })

    const agencySubscription = await db.agency.findUnique({
        where: {
          id: params.agencyId,
        },
        select: {
          customerId: true,
          Subscription: true,
        },
      })

      const prices = await stripe.prices.list({
        product: process.env.NEXT_PLURA_PRODUCT_ID,
        active: true,
      })
    
    return <div>page </div>
}

export default page 