/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { api } from "@/convex/_generated/api"
import { stripe } from "@/lib/stripe"
import { useUser } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is missing")
}

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export async function createStripeConnectCustomer() {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("Not Authenticated")
    }

    const existingStripeConnectId = await convex.query(
        api.users.getUsersStripeConnectId,
        {
            userId
        }
    )

    if (existingStripeConnectId) {
        return { acoount: existingStripeConnectId }
    }

    const account = await stripe.accounts.create({
        type: "express",
        capabilities: {
            card_payments: { requested: true },
            transfers: { requested: true },

            // samsung_pay_payments: { requested: true },
            // amazon_pay_payments: { requested: true },
            // india_international_payments: { requested: true },

        }
    })

    await convex.mutation(api.users.updateOrCreateUserStripeConnectId, {
        userId,
        stripeConnectId: account.id,
    })

    return { account: account.id }
}