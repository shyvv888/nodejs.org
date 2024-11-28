'use client';

import type { FC, PropsWithChildren } from 'react';
import { useContext } from 'react';

import LinkWithIcon from '@/components/Common/LinkWithIcon';
import Link from '@/components/Link';
import { BASE_CHANGELOG_URL } from '@/next.constants.mjs';
import { ReleaseContext } from '@/providers/releaseProvider';

const ChangelogLink: FC<PropsWithChildren> = ({ children }) => {
  const { release } = useContext(ReleaseContext);

  return (
    <LinkWithIcon asChild>
      <Link href={`${BASE_CHANGELOG_URL}${release.version}`}>{children}</Link>
    </LinkWithIcon>
  );
};

export default ChangelogLink;
