import { ReactNode } from 'react';

interface CardsProps {
  icon: ReactNode;
  text: string;
  description: string;
}

const Cards = ({ icon, text, description }: CardsProps) => {
  return (
    <div className="m-2.5 lg:mx-0 lg:w-[300px] lg:h-[260px] relative rounded-tl-3xl rounded-br-3xl bg-white flex flex-col items-center shadow-2xl lg:-mt-14 mb-16">
      <span className="mt-8 lg:mt-12 mb-2 lg:mb-4">{icon}</span>
      <h2 className="font-bold text-xl mb-3">{text}</h2>
      <p className="text-center text-sm leading-4 w-[80%] pb-6">
        {description}
      </p>
    </div>
  );
};

export default Cards;
