import { useMatches } from '@remix-run/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import * as styles from './SceneLayout.css';

import type { RouteMatch } from '@remix-run/react';
import type { FC, ReactNode } from 'react';

interface SceneLayoutProps {
  children: ReactNode;
}

const SceneLayout: FC<SceneLayoutProps> = ({ children }) => {
  const matches = useMatches();

  const offset = useMemo(() => getOffset(matches), [matches]);

  const dir = useMemo(() => getDir(matches), [matches]);

  const posY = useMemo(() => getPosY(matches), [matches]);

  return (
    <div
      className={styles.box[dir]}
      style={assignInlineVars({
        [styles.y]: posY,
        [styles.offset]: offset,
      })}
    >
      {children}
    </div>
  );
};

export default SceneLayout;

interface RouteMatchWithSceneHandle extends RouteMatch {
  handle: {
    offset: number;
    dir: 'top' | 'bottom';
  };
}

const hasSceneHandle = (
  route: RouteMatch
): route is RouteMatchWithSceneHandle => {
  if (typeof route?.handle?.offset !== 'number') return false;
  if (typeof route?.handle?.dir !== 'string') return false;
  if (!['top', 'bottom'].includes(route.handle.dir)) return false;
  return true;
};

const getOffset = (matches: RouteMatch[]) => {
  const lastMatch = matches[matches.length - 1];

  if (hasSceneHandle(lastMatch)) {
    return `${lastMatch.handle.offset}px`;
  }

  return '0px';
};

const getDir = (matches: RouteMatch[]) => {
  const lastMatch = matches[matches.length - 1];

  if (hasSceneHandle(lastMatch)) {
    return lastMatch.handle.dir;
  }

  return 'default';
};

const getPosY = (matches: RouteMatch[]) => {
  const lastMatch = matches[matches.length - 1];

  if (hasSceneHandle(lastMatch)) {
    const op = lastMatch.handle.dir === 'top' ? '+' : '-';

    return `${op}${lastMatch.handle.offset / 2}px`;
  }

  return '0px';
};
