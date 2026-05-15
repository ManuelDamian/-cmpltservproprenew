import './Section.scss';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section id={id} className={`full-page-section ${className}`}>
      {children}
    </section>
  );
};