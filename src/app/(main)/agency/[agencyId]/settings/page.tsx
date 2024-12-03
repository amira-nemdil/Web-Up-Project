import SubAccountDetails from '@/components/forms/subaccount-details'
import UserDetails from '@/components/forms/user-details'
import BlurPage from '@/components/global/blur-page'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

type Props = {
  params: { subaccountId: string }
}

const SettingsPage = async ({ params }: Props) => {  
    const authUser = await currentUser();  
    if (!authUser) return;  
  
    const userDetails = await db.user.findUnique({  
      where: {  
        email: authUser.emailAddresses[0].emailAddress,  
      },  
    });  
    if (!userDetails) return;  
  
    const subAccountId = params.subaccountId;  
    if (!subAccountId) {  
      // Handle the case where subaccountId is undefined  
      return <div>Subaccount ID is missing</div>;  
    }  
  
    const subAccount = await db.subAccount.findUnique({  
      where: { id: subAccountId },  
    });  
    if (!subAccount) {  
      // Handle the case where the subAccount is not found  
      return <div>Subaccount not found</div>;  
    }  
  
    const agencyDetails = await db.agency.findUnique({  
      where: { id: subAccount.agencyId },  
      include: { SubAccount: true },  
    });  
  
    if (!agencyDetails) return;  
    const subAccounts = agencyDetails.SubAccount;  
  
    return (  
      <BlurPage>  
        <div className="flex lg:!flex-row flex-col gap-4">  
          <SubAccountDetails  
            agencyDetails={agencyDetails}  
            details={subAccount}  
            userId={userDetails.id}  
            userName={userDetails.name}  
          />  
          <UserDetails  
            type="subaccount"  
            id={subAccountId}  
            subAccounts={subAccounts}  
            userData={userDetails}  
          />  
        </div>  
      </BlurPage>  
    );  
  };  

export default SettingsPage