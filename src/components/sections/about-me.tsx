import Image from 'next/image';

import SangamFullPose from '/public/images/sangam-full-pose.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SangamFullPose}
              alt="Fullpose of Sangam"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I’m Sangam Paudel, a computer engineering student who is passionate about data science, machine learning, and artificial intelligence. I love exploring how data and models can solve real problems and help us understand the world better.
          </Typography>
          <Typography>
            I enjoy learning new concepts, trying out models, and staying updated with the latest in AI. I believe in building a strong foundation and improving step by step through consistent effort.
          </Typography>
          <Typography>
            I also like sharing what I learn and connecting with others who are interested in similar topics. I’m active on social platforms where I learn from others and also contribute in small ways.
          </Typography>
          <Typography>
            You can find me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share thoughts about machine learning, on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>{' '}
            where I work on open code and ideas, and on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.KAGGLE}
            >
              Kaggle
            </Link>{' '}
            where I participate in competitions and learn from data.
          </Typography>
          <Typography>Some quick facts about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Studying Computer Engineering</Typography>
              <Typography component="li">Interested in real-world applications of AI</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Always eager to learn</Typography>
              <Typography component="li">Focused on simplicity</Typography>
            </ul>
          </div>
          <Typography>
            Thanks for stopping by and reading about me. I’m always open to learning and connecting, so feel free to reach out anytime.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
