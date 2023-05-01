// import { useState } from 'react'
import { Card } from './component/card/card'
import { useCourseData } from './hooks/useCourseData'
import { CourseData } from './interface/CourseData'

function App() {
  // const [count, setCount] = useState(0)
  const { data } = useCourseData();

  return (
    <div className='container'>
      <h1>Cursos</h1>
      <div className="card-grid">
        {data?.map(courseData =>
          <Card
            title={courseData.title}
            cover={courseData.cover}
            price={courseData.price}
          />)}
      </div>
    </div>
  )
}

export default App
