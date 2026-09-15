"use client";

import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import { ArrowRight, Bold } from "lucide-react"
import Link from "next/link"
import { StarfieldBackground } from "@/components/ui/starfield"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useInAppBrowser } from "@/components/InApp-Checker";

export default function Home() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const { isInApp, appName } = useInAppBrowser();

  if ( isInApp === null ) return <p>Loading...</p>


  return (
    <div className="flex min-h-screen flex-col">
      <StarfieldBackground>
        <ScrollArea className={"w-full h-full"}>
        <main className="flex-1">
        
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center items-center h-full w-full">
              <Avatar className="h-55 w-55">
                <AvatarImage src={"/images/jane_pfp.jpg"} />
                <AvatarFallback>O</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-pink-500 mb-6 text-6xl font-bold">
              <strong>Olivia Oakley</strong>
            </h1>

            <div>
            {isInApp ? (
            <div>
              <div className="flex justify-center h-full w-full gap-3">
              <Link href={"https://www.instagram.com/milaacarterr"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-300 rounded-2xl"
              >
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/instagram_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              <Link href={"https://www.tiktok.com/@milaacarterr"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/tiktok_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              {/* <Link href={"https://x.com/janewylderrr"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/twitter_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              <Link href={"https://www.reddit.com/user/janewylderrr/"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/reddit_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link> */}
              </div>
              <div className="flex justify-center h-full w-full gap-3 py-10">
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" className="flex items-center gap-2 bg-pink-300 h-50" />}>
                      <Image 
                      src={"/images/onlyfans_icon.png"}
                      alt="Button Icon"
                      width={300}
                      height={500}
                      loading="eager"
                      
                      />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader>
                      <PopoverTitle><strong>18+ Content Warning</strong></PopoverTitle>
                      <PopoverDescription>This link may contain graphic or adult content.</PopoverDescription>
                      <PopoverTitle><strong>Tap the three dots in the top or bottom right, then choose</strong></PopoverTitle>
                      <PopoverDescription>Open in external browser</PopoverDescription>
                    </PopoverHeader>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            ) : (
              <div>
              <div className="flex justify-center h-full w-full gap-3 ">
              <Link href={"https://www.instagram.com/milaacarterr"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-pink-300 rounded-2xl"
              >
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/instagram_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              <Link href={"https://www.tiktok.com/@milaacarterr"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/tiktok_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              {/* <Link href={"https://x.com/janewylderrr"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/twitter_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link>
              <Link href={"https://www.reddit.com/user/janewylderrr/"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300"}>
                  <Image
                  src={"/images/reddit_icon.svg"} 
                  alt="Button Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  />
                </Button>
              </Link> */}
              </div>
              <div className="flex justify-center h-full w-full gap-3 py-10">
              <Link href={"https://onlyfans.com/milacarterrr"} target="_blank" rel="noopener noreferrer" className="bg-pink-300 rounded-2xl">
                <Button variant={"outline"} className={"flex items-center gap-2 bg-pink-300 h-50"}>
                  <Image 
                  src={"/images/onlyfans_icon.png"}
                  alt="Button Icon"
                  width={300}
                  height={500}
                  loading="eager"
                  
                  />
                </Button>
              </Link>
            </div>
              </div>
            )};
            
            </div>

          </div>
        </section>
      </main>
        </ScrollArea>
      </StarfieldBackground>
      
      
      
    </div>
  )
}

