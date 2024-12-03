'use client'

import { Contact, User } from "@prisma/client"

interface ModalProviderProps {
  children: React.ReactNode
}

export type ModalData={
  user?: User
  
}