import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card
      className="
        mx-auto flex max-w-4xl flex-col gap-6 rounded-xl
        border-t-2 border-l-2 border-[#162a50]
        bg-white text-gray-800
        shadow-xl shadow-[#171f31]
        hover:border-t-8 hover:border-l-8
        dark:bg-[radial-gradient(circle_at_top_left,_#111827,#030712)] dark:to-pink-500 dark:text-slate-400 dark:border-[#162a50] dark:shadow-[#171f31]

        p-8 md:flex-row md:items-center md:gap-8
      "
    >

      <div className="flex flex-row items-center justify-between md:flex-col md:w-1/4 gap-4 md:gap-6">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[120px] object-contain"
        />
        <Typography
          className="whitespace-nowrap text-gray-700 dark:text-slate-500 md:text-right text-sm font-medium"
        >
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)} -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
            : 'NA'}
        </Typography>
      </div>


      <div className="flex flex-col md:w-3/4 gap-4">
        <Typography variant="subtitle" className="font-semibold text-gray-900 dark:text-slate-300">
          {position}
        </Typography>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-slate-400">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index} className="leading-relaxed">
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
