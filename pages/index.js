import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Layout from '../components/layout/Layout';
import Services from '../components/Services';
import { API_URL } from '../config/index';
export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs data={data} />
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/jobs?populate=*`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
