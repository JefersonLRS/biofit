import { useState } from 'react';
import GreatTitle from './GreatTitle';
import { categoriesMock } from './mocks/categories-mock';
import Modal from './Modal';

export interface CategoryProps {
  name: string;
  hour: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  message: string;
}

const Categories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({} as CategoryProps);

  const handleOpenModal = (category: CategoryProps) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory({} as CategoryProps);
  };

  return (
    <section className="mb-11 p-2.5 lg:p-0">
      <div className="w-full max-w-[1100px] bg-white mx-auto mt-4 flex flex-col items-center p-5 lg:p-8 shadow-2xl relative">
        <GreatTitle title="Nossas turmas" />
        <h1 className="hidden lg:block font-extrabold tracking-[-0.08em] text-5xl my-5 uppercase">
          Oferecemos as melhores aulas pra você
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 my-5">
          {categoriesMock.map(category => (
            <div
              className="flex flex-col items-center relative cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => handleOpenModal(category)}
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-96 max-h-80 hover:scale-110 transition-all duration-700 hover:brightness-50"
              />
              <h1 className="font-bold text-3xl my-3 absolute bottom-7 left-6 text-white">
                {category.name}
              </h1>
              <h2 className="font-bold text-base absolute bottom-3 left-6 text-white bg-orange px-2">
                {category.hour}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal} category={selectedCategory} />
      )}
    </section>
  );
};

export default Categories;
