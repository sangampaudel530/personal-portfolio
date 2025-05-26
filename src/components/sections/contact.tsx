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
      <div className="flex flex-col items-center gap-4 mb-8">
        <Tag label="Get in touch" />
        <Typography variant="subtitle" className="max-w-xl text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          Data Scientist, have a query, or simply want to connect.
        </Typography>
      </div>

      {/* Email Display */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <Mail className="h-6 w-6 md:h-8 md:w-8" />
        <Typography variant="h2">{email}</Typography>
        <IconButton
          size={width && width < 768 ? 'md' : 'lg'}
          onClick={() => handleCopyClick(email)}
          showTooltip={isCopied}
          tooltipText="Copied!"
        >
          <Copy />
        </IconButton>
      </div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mwpodryg"
        method="POST"
        className="w-full max-w-2xl mx-auto mb-10 bg-white/5 dark:bg-white/5 p-6 md:p-10 rounded-2xl shadow-md space-y-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-sm text-neutral-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Your Name"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-sm text-neutral-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-medium text-sm text-neutral-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="bg-transparent border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-fit px-6 py-2 rounded-xl bg-accent hover:bg-accent/90 transition text-white font-medium"
        >
          Send Message
        </button>
      </form>

      {/* Social Media Icons */}
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
