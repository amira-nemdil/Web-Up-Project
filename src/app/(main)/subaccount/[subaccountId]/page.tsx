import BlurPage from "@/components/global/blur-page"
import React from "react"

type Props = {
    params: {subaccountId: string}
    searchParams: {
        code: string
    }
}

const SubaccountPageId = async ({ params, searchParams }: Props) => {
    let currency = "USD"
    let sessions
    let totalClosedSessions
    let totalPendingSessions
    let net = 0
    let potentialIncome = 0
    let closingRate = 0

    const subaccountDetails = await db.subAccount.findUnique({
        where: {
            id: params.subaccountId,
        },
    })

    const currentYear = new Date().getFullYear()
    const startDate = new Date(`${currentYear}-01-01T00:00:00Z`).getTime() / 1000
    const endDate = new Date(`${currentYear}-12-31T23:59:59Z`).getTime() / 1000

    if (!subaccountDetails) return

    if (subaccountDetails.connectAccountId) {
        const response = await stripe.accounts.retrieve({
            stripeAccount: subaccountDetails.connectAccountId,
        })
        currency = response.default_currency?.toUpperCase() || "USD"
        const checkoutSessions = await getStripeOAuthLink.checkout.sessions.list(
            {created: { gte: startDate, lte: endDate }, limit: 100 },
            {
                stripeAccount: subaccountDetails.connectAccountId,
            }
        )

    }
     
} 