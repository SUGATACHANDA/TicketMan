/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                404
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">Oops! Page not found.</p>
            <p className="text-sm md:text-md text-gray-500 mt-2 max-w-lg text-center">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back home.
            </p>
            <p className='flex items-center justify-center space-x-5'>
                <button
                    onClick={() => router.back()}
                    className="mt-8 px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                >
                    Back to Previous
                </button>
                <button
                    onClick={() => router.push("/")}
                    className="mt-8 px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
                >
                    Back to Home
                </button>
            </p>
            <div className="absolute bottom-10">
                <p className="text-xs text-gray-600">
                    Need help? Contact us at{" "}
                    <a
                        href="mailto:support@example.com"
                        className="text-purple-400 hover:underline"
                    >
                        support@ticketman.co.in
                    </a>
                </p>
            </div>
        </div>
    )
}