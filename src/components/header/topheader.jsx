import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { IoChevronDownOutline } from 'react-icons/io5'

export default function Topheader() {
    return (
        <div className="hidden md:flex items-center justify-between bg-white px-4 py-2 text-sm border-b">
            <div className="flex items-center gap-2 text-muted-foreground">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    Eng <IoChevronDownOutline className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-1">
                    USD <IoChevronDownOutline className="h-4 w-4" />
                </div>
                <div>Sign In / Sign Up</div>
            </div>
        </div>
    )
}
