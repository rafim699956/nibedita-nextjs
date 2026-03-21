import SectionTitle from './SectionTitle'

const Coundown = () => {
  const sectionTitle = 'Till now we have served';
  const sectionDes = 'Nibedita has touched countless lives over the years, bringing support, care, and services to communities. From nurturing the health of mothers and children to providing mental and physical care, our journey is one of love, dedication, and hope.';
  return (
    <section className='bg-primary-600'>
      <div className='container'>
        <SectionTitle title={sectionTitle} description={sectionDes} varient='white' />
      </div>
    </section>
  )
}

export default Coundown