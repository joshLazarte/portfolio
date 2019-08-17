import React, { useState, useContext } from 'react';
import { ReCaptcha } from 'react-recaptcha-v3';
import axios from 'axios';
import SectionContext from '../../context/section/sectionContext';
import Spinner from '../spinner/Spinner';

const Contact = ({ loading, message, messageType }) => {
  const verifyRecaptcha = token => {
    setEmail({ ...newEmail, token });
  };

  const sectionContext = useContext(SectionContext);

  const { toggleLoading, setMessage } = sectionContext;

  const [newEmail, setEmail] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
    token: null
  });

  const { name, email, subject, body } = newEmail;

  const onChange = e =>
    setEmail({
      ...newEmail,
      [e.target.name]: e.target.value
    });

  const clearForm = () =>
    setEmail({
      name: '',
      email: '',
      subject: '',
      body: ''
    });

  const onSubmit = async e => {
    e.preventDefault();
    toggleLoading();
    try {
      const res = await axios.post('/contact', { email: newEmail });
      toggleLoading();
      setMessage({ msg: res.data.msg, type: 'success' });
      clearForm();
    } catch (err) {
      toggleLoading();
      if (err.response.data.msg) {
        setMessage({ msg: err.response.data.msg, type: 'error' });
      } else {
        setMessage({ msg: 'Something Went Wrong...', type: 'error' });
      }
    }
  };

  return (
    <section className='app-contact'>
      <ReCaptcha
        sitekey='6Ld4fbMUAAAAABmaT9Us2KbnmXOclZGOTe2VSL5b'
        action='contact'
        verifyCallback={verifyRecaptcha}
      />
      <h2 className='app-contact__heading'>Contact</h2>
      <div className='line' />
      {loading && <Spinner />}
      {message && (
        <p
          className={`app-contact__message ${messageType === 'error' &&
            'app-contact__message--error'}`}
        >
          {message}
        </p>
      )}
      {!loading && (
        <div className='app-contact__form'>
          <form onSubmit={onSubmit}>
            <input
              className='app-contact__form-input'
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Name'
              required
            />
            <input
              className='app-contact__form-input'
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
              required
            />
            <input
              className='app-contact__form-input'
              type='text'
              name='subject'
              value={subject}
              onChange={onChange}
              placeholder='Subject'
              required
            />
            <textarea
              className='app-contact__form-textarea'
              name='body'
              value={body}
              onChange={onChange}
              placeholder='Message'
              required
            />
            <input
              className='app-contact__form-submit'
              type='submit'
              value='Send Message'
            />
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
