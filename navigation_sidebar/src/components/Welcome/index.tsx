import React, { FC, lazy, Suspense } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { faCamera } from '@fortawesome/pro-solid-svg-icons';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';
import StyledWelcome from './styled';
import WelcomeProps from './types';
// @ts-ignore
import { GET_USER, GET_USERS, CREATE_USER } from '../../state/user.graphql';

// @ts-ignore
const Button = lazy(() => import('common/Button'));
// @ts-ignore
const Icon = lazy(() => import('common/Icon'));
// @ts-ignore
const HighlightsSelect = lazy(() => import('common/HighlightsSelect'));

const Welcome: FC<WelcomeProps> = ({ children }) => {
  const getUsers = useQuery(GET_USERS);
  const getUser = useQuery(GET_USER, {
    variables: { id: 1 },
  });
  const [createUser, createdUser] = useMutation(CREATE_USER);

  if (getUsers.loading) return <span>Loading</span>;

  if (getUsers.error) return <span>Error</span>;

  console.log({ getUser, getUsers, createdUser });

  const handleCreateUser = () => {
    createUser({ variables: { firstName: 'John', lastName: 'Doe', email: 'johndoe@lobox.com', age: 30 } }).then();
  };

  const handleFormSubmit = () => {
    console.log('sa');
  };

  const options = [
    { value: 'Fixed-term contracts', text: 'Fixed-term contracts' },
    { value: 'Part-time contracts', text: 'Part-time contracts' },
    { value: 'Full-time contracts', text: 'Full-time contracts' },
  ];

  return (
    <StyledWelcome>
      <Helmet>
        <title>Lobox Example Welcome</title>
      </Helmet>
      <Suspense fallback={<span>Loading</span>}>
        <Button buttonType="primary" buttonSize="medium" onClick={handleCreateUser}>
          <Icon icon={faCamera} color="#fff" size="2x" />
        </Button>
        <Formik
          initialValues={{
            email: '',
            message: '',
            contractType: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Not an email').required('Email is required'),
            message: Yup.string().min(5).max(15).required('Message is required'),
            contractType: Yup.string().required('Contract type is required'),
          })}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, handleBlur, handleChange, errors, values, touched, setFieldTouched, setFieldValue }) => (
            <Form>
              <HighlightsSelect
                name="contractType"
                value={values.contractType}
                error={errors.contractType}
                defaultOption={{ value: '', text: 'Contract Type' }}
                options={options}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
            </Form>
          )}
        </Formik>
      </Suspense>
      {children}
    </StyledWelcome>
  );
};

export default Welcome;
