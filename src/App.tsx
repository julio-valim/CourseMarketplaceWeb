// import { useState } from 'react'
import { Card } from './component/card/card'
import { CourseData } from './interface/CoursseData'

function App() {
  // const [count, setCount] = useState(0)
  const data: CourseData[] = []

  return (
    <div className='container'>
      <h1>Cursos</h1>
      <div className="card-grid">
        {data.map(courseData =>
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
