"use server"

import { stripe } from "@/lib/stripe"

export async function createStripeConnectLoginLink(stripeConnectId: string) {
    if (!stripeConnectId) {
        throw new Error("No Stripe account ID provided")
    }

    try {
        const loginLink = await stripe.accounts.createLoginLink(stripeConnectId)
        return loginLink.url
    } catch (error) {
        console.log("Error creating Stripe Connect Login Link:", error)
        throw new Error("Failed to create Stripe Connect Login Link")
    }
}