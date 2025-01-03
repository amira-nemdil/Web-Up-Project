import React from "react";
import {
  Card,
  CardDescription,
  CardHeader ,
  CardTitle ,
  CardContent,
}from '@/components/ui/card'
import Image from "next/image";
import { db } from "@/lib/db";
import { CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { stripe } from '@/lib/stripe'
import { getStripeOAuthLink } from '@/lib/utils'




type Props={
  params:{
    agencyId:string
  }
  searchParams: { code:string }
}

const LaunchPadPage= async ({params,searchParams}:Props)=>{
  const agencyDetails =await db.agency.findUnique({where:{
   id :params.agencyId
  }})

  if (!agencyDetails) return

  const allDetailsExist =
   agencyDetails.address &&
   agencyDetails.address &&
   agencyDetails.agencyLogo &&
   agencyDetails.city &&
   agencyDetails.companyEmail &&
   agencyDetails.companyPhone &&
   agencyDetails.country &&
   agencyDetails.name &&
   agencyDetails.state &&
   agencyDetails.zipCode
   
   const stripeOAuthLink = getStripeOAuthLink(
    'agency',
    `launchpad___${agencyDetails.id}`
  )

  let connectedStripeAccount = false

  if (searchParams.code) {
    if (!agencyDetails.connectAccountId) {
      try {
        const response = await stripe.oauth.token({
          grant_type: 'authorization_code',
          code: searchParams.code,
        })
        await db.agency.update({
          where: { id: params.agencyId },
          data: { connectAccountId: response.stripe_user_id },
        })
        connectedStripeAccount = true
      } catch (error) {
        console.log('🔴 Could not connect stripe account')
      }
    }
  }
  return( 
    <div className="llex flex-col justify-center items-center">
      <div className="w-full h-full max-w-[800px]"></div>
      <Card className='border-none'>
        <CardHeader>
         <CardTitle>Lets get started !</CardTitle>
         <CardDescription>
          Follow the steps below to get your account stup.
         </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex justify-between items-center w-full border p-4 rounded-lg gap-2">
            <div className="flex md:items-center gap-4 flex-col md:!flex-row">
            <Image 
             src="/appstore.png"
             alt="app logo"
             height={80}
             width={80}
             className="rounded-md object-contain"
            />
            <p>save the website as a shortcut on your mobile device</p>
            </div>
            <Button>Start </Button>
          </div>

          <div className="flex justify-between items-center w-full border p-4 rounded-lg gap-2">
            <div className="flex md:items-center gap-4 flex-col md:!flex-row">
            <Image 
             src="/stripelogo.png"
             alt="stripe logo"
             height={80}
             width={80}
             className="rounded-md object-contain"
            />
            <p>Connect your stripe account to accept payment and see your dashboard</p>
            </div>
            <Button>Start </Button>
          </div>

          <div className="flex justify-between items-center w-full border p-4 rounded-lg gap-2">
            <div className="flex md:items-center gap-4 flex-col md:!flex-row">
            <Image 
             src={agencyDetails.agencyLogo}
             alt="app logo"
             height={80}
             width={80}
             className="rounded-md object-contain"
            />
            <p> Fill in all your business details </p>
            </div>
            {allDetailsExist ? 
             <CheckCircleIcon 
               size={50}
               className="text-primary p-2 flex-shrink-0"
              />:(<Link 
                   className="bg-primary py-2 px-4 rounded-md text-white"
                   href={`/agency/${params.agencyId}/settings`}
                  >Start 
                  </Link>)
            }
          </div>
        </CardContent>

      </Card>
    </div>
  )
}
export default LaunchPadPage

