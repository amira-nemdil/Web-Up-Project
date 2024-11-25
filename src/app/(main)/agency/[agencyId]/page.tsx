import React from "react";
import { db } from "@/lib/db";

const Page=({
    params,
   }: {
    params :{agencyId :string}
    earchParams :{code:string}
   }) =>{
    let currency ='USD'
    let sessions
    let totalClosedSession
    let totalPendingSession
    let net=0
    let potentialIcome=0
    let closingRate=0
    const currentYear =new Date().getFullYear()
    const startDate= new Date(`${currentYear}-01-01T00:00:00Z`).getTime()/1000
    const endDate=new Date(`1${currentYear}-12-31T23:59:591`).getTime()/1000

    
    async function fetchAgencyDetails() {  
        const details = await db.agency.findUnique({  
          where: {  
            id: params.agencyId,  
          },  
        });  

    }
    return <div>{params.agencyId }</div>

}
export default Page