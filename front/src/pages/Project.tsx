import { useParams } from 'react-router'

function Project() {
  const { slug } = useParams()

  return (
    <section>
      <h1 className="text-3xl font-bold">{slug}</h1>
      <p className="text-muted">Lorem ipsum dolor sit amet.</p>
    </section>
  )
}

export default Project
