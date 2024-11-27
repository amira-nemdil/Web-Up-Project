import React from "react";
import { db } from "@/lib/db";

const Page =async({
  params,
}: {
    params :{agencyId:string}
    searchParams:{code :string}
  }) =>{
  let currency ='USD'
  let sessions
  let totalClosedSessions
  let totalPendingSessions
  let net=0
  let potentialIncome
  let closingRate=0
  const currentYear =new Date().getFullYear()
  const startDate =new Date(`${currentYear}-01-01T00:00:00Z`).getTime() /1000
  const endDate =new Date(`${currentYear}-12-31T23:59:59Z`).getTime() /1000

  const agencyDetails =await db.agency.findUnique({
    where:{
    id: params.agencyId,
   },
  })
  
  if (!agencyDetails) return
   const subaccounts = await db.subAccount.findMany({
    where:{
      agencyId:params.agencyId,
    },
   })

  return <div>{params.agencyId}</div>
}

export default Page