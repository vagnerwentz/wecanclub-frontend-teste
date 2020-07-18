import React from 'react';
import * as Yup from 'yup';
import { Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Formik } from 'formik';

import { FiUserPlus } from 'react-icons/fi';
import { Container } from './styles';

import Header from '../../components/Header';

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  cpf: string;
  accessCode: string;
  canAccess: boolean;
  companyId: string;
}

const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $phone: String!
    $email: String!
    $cpf: String!
    $accessCode: String!
    $canAccess: Boolean!
    $companyId: ID!
  ) {
    createUser(
      user: {
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        email: $email
        cpf: $cpf
        accessCode: $accessCode
        canAccess: $canAccess
        companyId: $companyId
      }
    ) {
      __typename
      ... on User {
        id
      }
      ... on ErrorWithMessage {
        message
      }
      ... on ErrorWithNodeId {
        nodeId
      }
      ... on ErrorWithInputPath {
        inputPath
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  const [addUser] = useMutation(CREATE_USER);

  const handleAddUser = (values: UserData): void => {
    addUser({ variables: values });
  };

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required()
      .min(3, 'Too short!')
      .max(255, 'Big name'),
    lastName: Yup.string().required().min(3, 'Too short!').max(255, 'Big name'),
    phone: Yup.string().required().max(14),
    email: Yup.string().min(3).email().required(),
    cpf: Yup.string().min(11).max(11).required(),
    accessCode: Yup.string().min(14).max(14).required(),
    canAccess: Yup.boolean(),
  });

  return (
    <Container>
      <Header />
      <Formik
        onSubmit={(values: UserData, { resetForm }) => {
          handleAddUser(values);
          resetForm();
        }}
        validationSchema={schema}
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          cpf: '',
          accessCode: '',
          canAccess: false,
          companyId: 'Jwx7C2RAekf1XZmUf9kX',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <h1>Cadastro de usuário</h1>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  value={values.firstName}
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Nome"
                  isValid={touched.firstName && !errors.firstName}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastname">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  value={values.lastName}
                  name="lastName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Sobrenome"
                  isValid={touched.lastName && !errors.lastName}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridTelephone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                value={values.phone}
                name="phone"
                type="text"
                onChange={handleChange}
                maxLength={14}
                placeholder="Telefone"
                isValid={touched.phone && !errors.phone}
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={values.email}
                minLength={3}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                isValid={touched.email && !errors.email}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompanyId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                value={values.companyId}
                readOnly
                onChange={handleChange}
                maxLength={14}
                name="companyId"
                type="text"
                placeholder="ID"
                isValid={touched.companyId && !errors.companyId}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  value={values.cpf}
                  type="text"
                  name="cpf"
                  minLength={11}
                  maxLength={11}
                  onChange={handleChange}
                  placeholder="CPF"
                  isValid={touched.cpf && !errors.cpf}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  value={values.accessCode}
                  onChange={handleChange}
                  maxLength={14}
                  name="accessCode"
                  type="password"
                  placeholder="Senha"
                  isValid={touched.accessCode && !errors.accessCode}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  name="canAccess"
                  onChange={handleChange}
                  label="Acesso"
                />
              </Form.Group>

              <button type="submit">
                <FiUserPlus size={30} />
              </button>
            </Form.Row>

            <Link to="/list">Listagem de usuários</Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Dashboard;
