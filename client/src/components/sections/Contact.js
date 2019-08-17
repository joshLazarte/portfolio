import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [newMessage, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [response, setResponse] = useState({ msg: null });

  const { name, email, subject, message } = newMessage;

  const onChange = e => {
    setMessage({
      ...newMessage,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () =>
    setMessage({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/contact', { email: newMessage });
      console.log(res.data.msg);
      setResponse({ ...response, msg: res.data.msg });
      clearForm();
    } catch (err) {
      setResponse({ ...response, msg: 'Something Went Wrong...' });
    }
  };

  return (
    <section className='app-contact'>
      <h2 className='app-contact__heading'>Contact</h2>
      {response.msg && <h5 className='app-contact__message'>{response.msg}</h5>}
      <div className='line' />
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
            name='message'
            value={message}
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
    </section>
  );
};

export default Contact;
