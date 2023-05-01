
import { useState } from 'react';
import { Card } from './component/card/card'
import { useCourseData } from './hooks/useCourseData'
import { CreateModal } from './component/create-modal/create-modal';

import './App.css'
import { FaPlus } from 'react-icons/fa';

function App() {
  const { data } = useCourseData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal= () => {
    setIsModalOpen(prev => !prev)
  }

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
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}><FaPlus/></button>
    </div>
  )
}

export default App
