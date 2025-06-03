import Image from 'next/image';

import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <div
      className="mx-auto flex flex-col items-center gap-6 p-8 overflow-hidden md:w-2/3 md:p-12 lg:w-1/3 testimonial relative border-t-2 border-l-2 border-[#162a50] shadow-xl hover:border-t-8 hover:border-l-8  shadow-[#171f31]" >
      <div className='absolute -top-1/2 -right-[70%] bg-[#1f3050] w-full h-full blur-[60px]'></div>
      <div className='inset-0.5 z-1 flex justify-center items-center flex-col'>

        <Image
          src={personAvatar!}
          alt={`${personName} avatar`}
          width={100}
          height={100}
          className="rounded-full border-white shadow-lg object-cover"
        />
        <Typography
          className="mt-4 text-center text-slate-400 italic text-md  leading-relaxed"
        >
          &quot;{testimonial}&quot;
        </Typography>
        <div className="flex w-full flex-col gap-1 mt-2 text-center">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {personName}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            {title}
          </Typography>


        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
