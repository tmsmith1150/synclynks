import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'SyncLynks | Medical Alert Jewelry',
    description: 'Medical Alert Jewelry',
    keywords: 'jewelry, medical jewelry, qrcode jewelry'
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
    <div>{children}</div>
    <h1>hello</h1>
    </body>
    </html>
  )
}

export default MainLayout