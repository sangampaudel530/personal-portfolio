import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  return (
    <Card className={`mx-auto flex w-full max-w-6xl flex-col border-t-4 border-r-4 border-[#232d45] md:flex-row ${layoutType === 'default' ? "hover:rotate-2" : "hover:-rotate-2"}`}>
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 p-2 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        <Link noCustomization href={url} externalLink>
          <Image
            src={previewImage}
            alt={`${name} preview`}
            className="rounded-xl shadow-lg min-h-[300px] transition-transform duration-500 md:hover:scale-105 hover:-rotate-3"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        <Link
          href={url}
          noCustomization
          className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
          externalLink
        >
          <ExternalLink />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectDetails;
