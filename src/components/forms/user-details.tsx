import { UserWithPermissionsAndSubAccounts } from "@/lib/types";
import { User } from "@clerk/nextjs/server";
import { SubAccount } from "@prisma/client";
import React, { useState } from "react";

type Props={
    id:string | null
    type:'agency' | 'subaccount'
    userData?: Partial<User>
    subAccounts?: SubAccount[]
}

const UserDetails=({id, type,subAccounts,userData}: Props)=>{
    const [subAccountPermissions,setSubAccountsPermissions]=useState<UserWithPermissionsAndSubAccounts>(null)
    return <div>UserDetails</div>
}

export default UserDetails