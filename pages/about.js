import Layout from '../components/layout/Layout';
import { API_URL } from '../config';
import Image from 'next/image';
import Title from '../components/Title';

export default function AboutPage({ about: { data } }) {
  const { title, info, image, stack } = data.attributes;

  const img = image.data[0].attributes.url;

  return (
    <Layout
      title='About Me - JCP'
      description='I am a Website Designer, Web Developer, SEO Specialist. I have worked on many websites and have been in the industry for more than a year now. I have worked on many projects and have a unique understanding of how to make websites work.'
    >
      <section className='about-page'>
        <div className='section-center about-center'>
          <div className='about-img' style={{ position: 'relative' }}>
            <Image src={img} alt={title} layout='fill' objectFit='contain' />
          </div>
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const aboutRes = await fetch(`${API_URL}/api/about?populate=*`);

  const about = await aboutRes.json();

  return { props: { about } };
}
