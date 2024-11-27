import React from "react";

const Page =({
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

  return <div>{params.agencyId}</div>
}

export default Page