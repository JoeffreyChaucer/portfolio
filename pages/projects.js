import Layout from '../components/layout/Layout';
import Projects from '../components/Projects';
import { API_URL } from '../config/index';

export default function ProjectsPage({ projects }) {
  return (
    <Layout
      title='All Projects | JCP '
      description='Here are my portfolios that I have put together. Find out more about me and my work.'
    >
      <section className='projects-page'>
        <Projects projects={projects.data} title='All Projects' />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projectsRes = await fetch(
    `${API_URL}/api/projects?populate=*&sort=id:desc`
  );

  const projects = await projectsRes.json();

  return { props: { projects } };
}
