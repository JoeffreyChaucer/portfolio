import Layout from '../components/layout/Layout';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <Layout title='404 Page Not Found'>
      <main className='error-page'>
        <div className='error-container'>
          <h1>Oops it's a dead end</h1>
          <Link href='/'>
            <a className='btn'> back home</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
