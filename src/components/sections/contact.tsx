'use client';

import { useState } from 'react';
import { Mail, Copy } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';
import { BsCopy } from "react-icons/bs";

const email = 'sangampaudel530@gmail.com';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async (text: string) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timeoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4 mb-4">
        <Tag label="Get in touch" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          Data Scientist, have a query, or simply want to connect.
        </Typography>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText('subeshgaming@gmail.com');
          alert('Email copied to clipboard!');
        }}
        className="group relative overflow-hidden border-2 border-[#546397] w-[150px] mx-auto px-4 py-2 rounded-sm resume-btn bg-transparent"
      >
        <span className="relative z-10 text-white flex justify-center items-center gap-2 group-hover:text-blue-950 transition-colors duration-300">
          Copy Email <BsCopy className="text-white group-hover:text-[#030712] transition-colors duration-300" />
        </span>
        <span className="absolute inset-0 bg-[#546397] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
      </button>




      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mwpodryg"
        method="POST"
        className="mx-auto w-[350px] sm:w-[450px]  p-8 md:p-12 rounded-2xl relative overflow-hidden
    border-t-2 border-l-2 border-[#162a50] shadow-xl shadow-[#171f31]
    bg-white/5 backdrop-blur-md
    hover:border-t-8 hover:border-l-8
    transition-all duration-300
    space-y-6"
      >
      
        <div className="absolute -top-1/2 -right-[70%] w-full h-full bg-[#131923] blur-[60px] -z-10 rounded-2xl"></div>

     
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-sm text-slate-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-[#162a50] rounded-lg px-4 py-2
        text-gray-300 placeholder:text-gray-500
        focus:outline-none focus:ring-2 focus:ring-[#1f3050]
        transition"
          />
        </div>

    
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-sm text-slate-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className="bg-transparent border border-[#162a50] rounded-lg px-4 py-2
        text-gray-300 placeholder:text-gray-500
        focus:outline-none focus:ring-2 focus:ring-[#1f3050]
        transition"
          />
        </div>

 
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-medium text-sm text-slate-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Write your message here..."
            className="bg-transparent border border-[#162a50] rounded-lg px-4 py-2
        text-gray-300 placeholder:text-gray-500
        focus:outline-none focus:ring-2 focus:ring-[#1f3050]
        transition resize-none"
          />
        </div>


        <button
          type="submit"
          className="relative overflow-hidden w-full md:w-fit px-6 py-2 rounded-xl
    bg-[#1f3050] text-white font-semibold shadow-lg
    before:absolute before:top-0 before:left-full before:h-full before:w-full
    before:bg-[#546397] before:transition-transform before:duration-300
    hover:before:-translate-x-full
    transition-colors duration-300"
        >
          <span className="relative z-10">Send Message</span>
        </button>

      </form>




      <div className="flex flex-col items-center gap-3 mt-8">
        <Typography className="text-center text-base text-neutral-300">
          You may also find me on these platforms!
        </Typography>
        <SocialIcons />
      </div>
    </Container>
  );
};

export default ContactSection;
