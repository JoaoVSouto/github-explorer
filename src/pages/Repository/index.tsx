import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />

        <Link to="/">
          <FiChevronLeft size={24} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <div className="main-info">
          <img
            src="https://avatars1.githubusercontent.com/u/42191629?v=4"
            alt="João Vítor's  avatar"
          />

          <div>
            <strong>JoaoVSouto/github-jobs-explorer</strong>
            <p>
              A Github Jobs explorer 🌎. A place where you can search for jobs
              registered on Github Jobs API.
            </p>
          </div>
        </div>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Open issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a href="#!">
          <div>
            <strong>gostack-desafio-conceitos-react-native</strong>
            <p>lorem ipsum</p>
          </div>

          <FiChevronRight size={32} />
        </a>
      </Issues>
    </>
  );
};

export default Repository;
