import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form>
        <input
          type="text"
          placeholder="Insert the repository name, i.e., facebook/react"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="#!">
          <img
            src="https://avatars1.githubusercontent.com/u/42191629?v=4"
            alt="João Vítor's Avatar"
          />

          <div>
            <strong>JoaoVSouto/github-jobs-explorer</strong>
            <p>
              A Github Jobs explorer 🌎. A place where you can search for jobs
              registered on Github Jobs API.
            </p>
          </div>

          <FiChevronRight size={32} />
        </a>
        <a href="#!">
          <img
            src="https://avatars1.githubusercontent.com/u/42191629?v=4"
            alt="João Vítor's Avatar"
          />

          <div>
            <strong>JoaoVSouto/github-jobs-explorer</strong>
            <p>
              A Github Jobs explorer 🌎. A place where you can search for jobs
              registered on Github Jobs API.
            </p>
          </div>

          <FiChevronRight size={32} />
        </a>
        <a href="#!">
          <img
            src="https://avatars1.githubusercontent.com/u/42191629?v=4"
            alt="João Vítor's Avatar"
          />

          <div>
            <strong>JoaoVSouto/github-jobs-explorer</strong>
            <p>
              A Github Jobs explorer 🌎. A place where you can search for jobs
              registered on Github Jobs API.
            </p>
          </div>

          <FiChevronRight size={32} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
