import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const FloatingButton = dynamic(() => import('../components/FloatingButton'), {
  ssr: false,
});

export default function Home() {
 return (
 <>
  <Header />
  <main>
  <FloatingButton />
  <Hero />
  <About />
  <Services />
  <Portfolio />
  <Blog />
  <Contact />
  </main>
  <Footer />
 </>
 )
}

