import React from 'react';

const Contact = () => {
  return (
    <section className='app-contact'>
      <h2 className='app-contact__heading'>Contact</h2>
      <div className='line' />
      <div className='app-contact__form'>
        <form>
          <input
            className='app-contact__form-input'
            type='text'
            name='email[name]'
            placeholder='Name'
            required
          />
          <input
            className='app-contact__form-input'
            type='email'
            name='email[email]'
            placeholder='Email'
            required
          />
          <input
            className='app-contact__form-input'
            type='text'
            name='email[subject]'
            placeholder='Subject'
            required
          />
          <textarea
            className='app-contact__form-textarea'
            name='email[message]'
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
