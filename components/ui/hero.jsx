"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'



const HeroSection = () => {

const imageRef=useRef(null);


useEffect(()=>{
  const imageElement=imageRef.current;
  const handleScroll=()=>{
      const scrollPositon=window.scrollY;
      const scrollThreshold=100;
      if(scrollPositon>scrollThreshold){
          imageElement.classList.add("scrolled");
      }
      else{
        imageElement.classList.remove("scrolled");
      }
  };
  window.addEventListener("scroll",handleScroll);
  return ()=> window.removeEventListener("scroll",handleScroll);

},[])
    return (
      <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
          <div className="space-y-6 mx-auto">
            <h1
              className="text-4xl font-extrabold md:text-5xl lg:text-6xl xl:text-7xl 
                bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 text-transparent bg-clip-text  pr-2 
                drop-shadow-lg leading-snug tracking-tight animate-fade-in"
            >
              Your AI Career Coach for
              <br />
              Professional Success
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl ">
              Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
            </p>
          </div>
          <div>
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
          </div>
          <div className='hero-image-wrapper mt-5 md:mt-0'>
            <div ref={imageRef} className='hero-image'>
              <Image
                src={"/banner.jpeg"}
                width={1280}
                height={720}
                alt="Banner image"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
