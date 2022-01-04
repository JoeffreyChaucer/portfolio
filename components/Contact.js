import Title from './Title';
import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqpyqgw');

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Your message has been sent');
      document.getElementById('myForm').reset();
    }
  }, [state.succeeded]);

  return (
    <section className='section contact'>
      <Title title='Contact Me' />

      <article className='contact-form' id='contact'>
        <h3> get in touch</h3>
        <form onSubmit={handleSubmit} id='myForm'>
          <div className='form-group'>
            <input type='text' placeholder='name' className='form-control' />
            <input
              type='email'
              placeholder='email'
              id='email'
              name='email'
              className='form-control'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <textarea
              rows='5'
              placeholder='message'
              id='message'
              name='message'
              className='form-control'
            ></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button
            type='submit'
            className='submit-btn btn'
            disabled={state.submitting}
          >
            {state.submitting ? (
              <div className='lds-dual-ring'></div>
            ) : (
              'Submit Here'
            )}
          </button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
