import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form>
        <input type="text" placeholder="Insert the repository name" />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};

export default Dashboard;
