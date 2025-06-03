'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import IconButton from '@/components/general/icon-button';

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          className="0 hover:bg-violet-800 hover:text-green-400"
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon   />
        </IconButton>
      ))}
    </div>
  );
};

export default SocialIcons;
