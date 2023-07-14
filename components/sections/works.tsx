import { NextPage } from 'next';
import Work from '../project';
import Filter from '../filter';

interface DataType {
  id: number;
  photo: string;
  title: string;
  details: string;
  links: string;
  category?: string;
}

const data: DataType[] = [
  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'template',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'template',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'tools',
  },
];

interface Props {}

const Works: NextPage<Props> = ({}) => {
  return (
    <section id='works' className='py-14'>
      <div className='container'>
        <h2 className='text-4xl text-center font-bold text-slate-900 mb-10'>
          Recent Works
        </h2>
        <Filter />
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-10'>
          {data.map((project) => (
            <Work
              key={project.id}
              id={project.id}
              photo={project.photo}
              title={project.title}
              details={project.details}
              links={project.links}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
