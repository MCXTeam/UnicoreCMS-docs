import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, projectRepoUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: projectRepoUrl,
  };
}
