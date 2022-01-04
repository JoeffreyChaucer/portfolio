import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Layout from '../components/layout/Layout';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import { ToastContainer } from 'react-toastify';
import { API_URL } from '../config/index';

export default function Home({ jobs, projects }) {
  return (
    <Layout
      title='Dev | Joeffrey Chaucer C. Paitan'
      description='I have been a developer for about four years. I have been working on a lot of different projects. I will be posting about these different projects as well as some other info about me.'
    >
      <Hero />
      <Services />
      <Jobs jobs={jobs} />
      <Projects projects={projects.data} title='Featured projects' showLink />
      <Contact />
      <ToastContainer />
    </Layout>
  );
}

export async function getStaticProps() {
  const [jobsRes, projectsRes] = await Promise.all([
    fetch(`${API_URL}/api/jobs?populate=*&sort=id:desc`),
    fetch(`${API_URL}/api/projects?populate=*&featured=true&sort=id:desc`),
  ]);
  const [jobs, projects] = await Promise.all([
    jobsRes.json(),
    projectsRes.json(),
  ]);
  return { props: { jobs, projects } };
}
