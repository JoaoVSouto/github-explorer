import React, { useState, useCallback, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Error, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repoSearch, setRepoSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!repoSearch) {
        setInputError('Field cannot be empty');
        return;
      }

      const repository = repositories.find(
        repo => repo.full_name.toLowerCase() === repoSearch.toLowerCase(),
      );

      if (repository) {
        setInputError('Repository already on searched list');
        return;
      }

      try {
        const { data } = await api.get<Repository>(`repos/${repoSearch}`);

        setRepositories(repos => repos.concat(data));
        setRepoSearch('');
        setInputError('');
      } catch {
        setInputError('Repository could not be fetched');
      }
    },
    [repoSearch, repositories],
  );

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input
          type="text"
          placeholder="Insert the repository name, i.e., facebook/react"
          value={repoSearch}
          onChange={e => setRepoSearch(e.target.value.trim())}
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="#!">
            <img
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login}'s Avatar`}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={32} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
