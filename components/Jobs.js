import Title from './Title';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from 'next/link';

const Jobs = ({ jobs }) => {
  const [value, setValue] = useState(0);

  const { data: job } = jobs;

  const { company, position, date, desc } = job[value].attributes;

  return (
    <section className='section jobs'>
      <Title title='experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {job.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.attributes.company}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          {desc.map((item) => (
            <div key={item.id} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link href='/about'>
        <a className='btn center-btn'>more info</a>
      </Link>
    </section>
  );
};

export default Jobs;
