/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { faCamera, faSearch } from '@fortawesome/pro-solid-svg-icons';
import Button from './components/Button';
import Input from './components/Input';
import HighlightsInput from './components/Input/Highlights';
import HighlightsSelect from './components/Select/Highlights';
import DatePicker from './components/DatePicker';
import { HighlightsSelectOptionTypes } from './components/Select/types';

const App: FC = () => {
  const handleFormSubmit = () => {
    console.log('sa');
  };

  const handleFormikSubmit = () => {
    console.log('as');
  };

  const options: HighlightsSelectOptionTypes[] = [
    { value: 'Fixed-term contracts', text: 'Fixed-term contracts' },
    { value: 'Part-time contracts', text: 'Part-time contracts' },
    { value: 'Full-time contracts', text: 'Full-time contracts' },
  ];

  const clear = false;

  return (
    <div>
      <Button buttonType="primary" buttonSize="large">
        Test
      </Button>
      <hr />
      <Button buttonType="secondary" buttonSize="medium">
        Test
      </Button>
      <hr />
      <Button buttonType="primary" buttonSize="medium" icon iconType={faCamera}>
        Test
      </Button>
      <hr />
      <Button buttonType="text" buttonSize="small">
        Test
      </Button>
      <hr />
      <Button disabled>Auto</Button>
      <hr />
      <Button buttonType="feature">Feature Button</Button>
      <hr />
      <Input placeholder="Abraham" />
      <hr />
      <Formik
        initialValues={{
          jobTitle: '',
          company: '',
        }}
        validationSchema={Yup.object().shape({
          jobTitle: Yup.string().required('Job Title is needed.'),
          company: Yup.string().required('Company is needed.'),
        })}
        onSubmit={handleFormikSubmit}
      >
        {({ handleSubmit }) => (
          <Form autoComplete="off">
            <Field
              name="jobTitle"
              label="Job Title"
              helperText="Example: UX Designer, Sales Executive, Teacher..."
              component={HighlightsInput}
            />
            <Field
              name="company"
              label="Company"
              helperText="Example: Apple, Microsoft..."
              component={HighlightsInput}
            />
            <Field
              name="contractType"
              label="Contract Type"
              options={options}
              component={HighlightsSelect}
            />
            <Field
              textarea
              name="message"
              label="Description"
              component={HighlightsInput}
            />
            <Button type="submit" onSubmit={handleSubmit}>Create Highlight</Button>
          </Form>
        )}
      </Formik>
      <hr />
      <DatePicker />
    </div>
  );
};

export default hot(App);
