'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import Ticket from '@/components/Ticket';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { redirect, useParams } from 'next/navigation';
import React from 'react'

function VerifyTicketViaQR() {
    const params = useParams();
    const { user } = useUser()
    const ticket = useQuery(api.tickets.getTicketWithDetails, {
        ticketId: params.id as Id<"tickets">,
    });
    if (!ticket?.event) {
        return null
    }
    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-96'>
            <Ticket ticketId={ticket?._id} key={ticket?._id} />
        </div>
    )
}

export default VerifyTicketViaQR
