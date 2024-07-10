import React from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
    title: 'SyncLynks | Medical Alert Jewelry',
    description: 'Medical Alert Jewelry',
    keywords: 'jewelry, medical jewelry, qrcode jewelry'
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <Navbar />
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  )
}

export default MainLayout