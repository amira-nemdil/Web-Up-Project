import React from "react";
import { db } from "@/lib/db";
import AgencyDetails from "@/components/forms/agency-details";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";


const Page = async ({
    params,
  }: {
    params: { agencyId: string }
    searchParams: { code: string }
  }) => {
    let currency = 'USD'
    let sessions
    let totalClosedSessions
    let totalPendingSessions
    let net = 0
    let potentialIncome = 0
    let closingRate = 0
    const currentYear = new Date().getFullYear()
    const startDate = new Date(`${currentYear}-01-01T00:00:00Z`).getTime() / 1000
    const endDate = new Date(`${currentYear}-12-31T23:59:59Z`).getTime() / 1000
  
    const agencyDetails = await db.agency.findUnique({
      where: {
        id: params.agencyId,
      },
    })
  
    if (!agencyDetails) return
  
    const subaccounts = await db.subAccount.findMany({
      where: {
        agencyId: params.agencyId,
      },
    })
  
    if (agencyDetails.connectAccountId) {
      const response = await stripe.accounts.retrieve({
        stripeAccount: agencyDetails.connectAccountId,
      })
      currency = response.default_currency?.toUpperCase() || 'USD'
      const checkoutSessions = await stripe.checkout.sessions.list(
        {
          created: { gte: startDate, lte: endDate },
          limit: 100,
        },
        { stripeAccount: agencyDetails.connectAccountId }
      )
      sessions =checkoutSessions.data
      totalClosedSessions =checkoutSessions.data.filter(
        (sessions)=>sessions.status ==='complete'
      )
      .map((sessions)=>({
        ...sessions,
        created: new Date(sessions.created).toLocaleDateString(),
        amount_total: sessions.amount_total ? sessions.amount_total / 100 : 0,
      }))

      totalPendingSessions = checkoutSessions.data
      .filter((session) => session.status === 'open')
      .map((session) => ({
        ...session,
        created: new Date(session.created).toLocaleDateString(),
        amount_total: session.amount_total ? session.amount_total / 100 : 0,
      }))

      net = +totalClosedSessions
      .reduce((total, session) => total + (session.amount_total || 0), 0)
      .toFixed(2)

      potentialIncome = +totalPendingSessions
      .reduce((total, session) => total + (session.amount_total || 0), 0)
      .toFixed(2)
    }

   

    return <div>{params.agencyId}</div>
}

export default Page