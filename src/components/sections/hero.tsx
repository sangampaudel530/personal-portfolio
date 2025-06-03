import Image from 'next/image';
import { MapPin } from 'lucide-react';

import SangamHeadshot from '/public/images/sangam-headshot.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container
      id="hero"
      className="bg-white dark:bg-[radial-gradient(circle_at_top_left,_#111827,_#030712)]"
    >
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="group relative h-[300px] w-[280px] md:h-[360px] md:w-[320px] perspective-[1000px]">
            <div className="relative h-full w-full transform-gpu transition-transform duration-500 group-hover:rotate-x-[12deg] group-hover:rotate-y-[6deg]">
          
              <Image
                src={SangamHeadshot}
                alt="Headshot of Sangam"
                className="absolute z-10 h-[280px] w-[240px] rounded-xl border-4 border-[#162a50] object-cover max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              />

            
              <div className="absolute left-3 top-3 h-[280px] w-[240px] rounded-xl border-4 border-transparent bg-[#1f3050] opacity-70 transition-all duration-500 group-hover:left-5 group-hover:top-5 md:h-[320px] md:w-[280px]" />
            </div>
          </div>
        </div>



        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Sangam{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              I’m a computer engineering student passionate about data science, machine learning, and artificial intelligence. I enjoy building data-driven solutions, working on real-world datasets, and continuously learning how models and algorithms can solve complex problems.
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Kushma, Nepal</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for projects and collaboration</Typography>
            </div>
          </div>

          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};


export default HeroSection;
