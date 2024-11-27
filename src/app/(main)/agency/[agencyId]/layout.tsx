import { verifyAndAcceptInvitation } from "@/lib/queries";  
import { currentUser } from "@clerk/nextjs/server";  
import { redirect } from "next/navigation";  
import { Chicle } from "next/font/google";  
import React from "react";  
import Unauthorized from "@/components/unauthorized";
import {
    getNotificationAndUser,
    verifyAndAcceptInvitation,
  } from '@/lib/queries'

type Props = {  
  children: React.ReactNode;  
  params: { agencyId: string };  
};  

const layout = async ({ children, params }: Props) => {  
  const agencyId = await verifyAndAcceptInvitation();  
  const user = await currentUser();  

  if (!user) {  
    return redirect("/");  
  }  

  if (!agencyId) {  
    return redirect("/agency");  
  }  

  if (
    user.privateMetadata.role !== 'AGENCY_OWNER' &&
    user.privateMetadata.role !=='AGENCY_ADMIN'
  )


  return <Unauthorized />

  let alNoti: any=[]
  const notification= await getNotificationAndUser(agencyId)
};  

export default layout;