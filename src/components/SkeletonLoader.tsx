import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#ccc">
      <div className="home-page">
        <Skeleton width={400} height={250} />
        <Skeleton width={400} height={250} />
        <Skeleton width={400} height={250} />
        <Skeleton width={400} height={250} />
      </div>
    </SkeletonTheme>
  );
};
