import React from 'react';
import Loading from '../components/Loading/index';
import loadable from '../utils/loadable';

// projectile
export const Projectile = loadable(
  () => import('./Pages/Projectile/Projectile'),
  {
    fallback: <Loading />,
  },
);

export const CreateProjectile = loadable(
  () => import('./Pages/Projectile/CreateProjectile'),
  {
    fallback: <Loading />,
  },
);

export const Leaderboards = loadable(
  () => import('./Pages/Projectile/Leaderboards'),
  {
    fallback: <Loading />,
  },
);

export const Settings = loadable(() => import('./Pages/Projectile/Settings'), {
  fallback: <Loading />,
});
