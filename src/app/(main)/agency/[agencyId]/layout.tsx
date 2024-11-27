import { verifyAndAcceptInvitation } from "@/lib/queries";  
import { currentUser } from "@clerk/nextjs/server";  
import { redirect } from "next/navigation";  
import { Chicle } from "next/font/google";  
import React from "react";  

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

  return <div>layout</div>;  
};  

export default layout;