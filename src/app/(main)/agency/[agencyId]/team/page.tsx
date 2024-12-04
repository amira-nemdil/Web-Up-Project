import { db } from '@/lib/db'
import React from 'react'
import { Plus } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'

type Props = {
  params: { agencyId: string }
}

const TeamPage = async ({ params }: Props) => {
  const authUser = await currentUser()
  const teamMembers = await db.user.findMany({
    where: {
      Agency: {
        id: params.agencyId,
      },
    },
    include: {
      Agency: { include: { SubAccount: true } },
      Permissions: { include: { SubAccount: true } },
    },
  })

  if (!authUser) return null
  const agencyDetails = await db.agency.findUnique({
    where: {
      id: params.agencyId,
    },
    include: {
      SubAccount: true,
    },
  })

  if (!agencyDetails) return

  return (
  <DataTable>
    
  </DataTable>
)
}

export default TeamPage