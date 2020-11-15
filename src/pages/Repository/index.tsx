import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <h1>
        Repository
        {params.name}
      </h1>
    </>
  );
};

export default Repository;
