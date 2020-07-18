import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { Table } from 'react-bootstrap';

import { FiArrowLeft, FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';

/* Styles */
import { Container } from './styles';

interface companyData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cpf: string;
}

interface companyNodeData {
  node: companyData;
}

const GET_USERS = gql`
  {
    getCompanyById(id: "Jwx7C2RAekf1XZmUf9kX") {
      __typename
      ... on Company {
        name
        usersConnection(first: 10) {
          edges {
            node {
              id
              firstName
              lastName
              phone
              email
              cpf
            }
          }
        }
      }
    }
  }
`;

const ListUsers: React.FC = () => {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return null;
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/dashboard">
          <FiArrowLeft size={30} />
          Voltar ao painel
        </Link>
        <h1>Listagem de usuários</h1>

        <Table striped bordered hover variant="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.getCompanyById.usersConnection.edges.map(
              ({
                node: { id, firstName, lastName, email, phone, cpf },
              }: companyNodeData) => (
                <tr key={cpf}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{cpf}</td>
                  <td>
                    <Link to={`/edit/${id}`}>
                      <FiEdit />
                    </Link>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ListUsers;
