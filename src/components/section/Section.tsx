import './Section.scss';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
}

export const Section = ({ id, title, className }: SectionProps) => {
  return (
    <section id={id} className={`full-page-section ${className}`}>
      <h2 className='section__title'>{title}</h2>
    </section>
  );
};