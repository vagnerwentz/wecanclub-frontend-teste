import React from 'react';
import * as Yup from 'yup';
import { Form, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Formik } from 'formik';

import { FiEdit2, FiArrowLeft } from 'react-icons/fi';
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

const queryGetById = (id: string) => gql`
  {
    getUserById(id: "${id}") {
      ... on  User{
        id
        firstName
        lastName
        phone
        email
        cpf
        accessCode
        canAccess
        company {
          id
        }
      }
    }
  }
`;

const mutationUpdateUser = () => gql`
  mutation UpdateUser(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $email: String!
    $companyId: ID!
  ) {
    updateUser(
      user: {
        id: $id
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        email: $email
        companyId: $companyId
      }
    ) {
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

const EditUser: React.FC = () => {
  const { id: EditId } = useParams();

  const { data, loading } = useQuery(queryGetById(EditId));

  const [updateUser] = useMutation(mutationUpdateUser());

  const handleUpdateUser = (values: UserData): void => {
    updateUser({ variables: values });
  };

  if (loading) {
    return null;
  }

  const {
    getUserById: {
      id,
      firstName,
      lastName,
      phone,
      email,
      cpf,
      accessCode,
      canAccess,
      company: { id: companyId },
    },
  } = data;

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required()
      .min(3, 'Too short!')
      .max(255, 'Big name'),
    lastName: Yup.string().required().min(3, 'Too short!').max(255, 'Big name'),
    phone: Yup.string().required().max(14),
    email: Yup.string().min(3).email().required(),
    companyId: Yup.string().required(),
  });

  return (
    <Container>
      <Link to="/dashboard">
        <FiArrowLeft size={30} />
        Voltar ao painel
      </Link>
      <Header />
      <Formik
        onSubmit={(values: UserData, { resetForm }) => {
          handleUpdateUser(values);
          resetForm();
        }}
        validationSchema={schema}
        initialValues={{
          id,
          firstName,
          lastName,
          phone,
          email,
          cpf,
          accessCode,
          canAccess,
          companyId,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <h1>Atualização de usuário</h1>
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
                  readOnly
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
                  readOnly
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
                  custom={values.canAccess}
                  readOnly
                  name="canAccess"
                  onChange={handleChange}
                  label="Acesso"
                />
              </Form.Group>

              <button type="submit">
                <FiEdit2 size={30} />
              </button>
            </Form.Row>

            <Link to="/list">Listagem de usuários</Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default EditUser;
