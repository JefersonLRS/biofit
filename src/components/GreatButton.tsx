import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface GreatButtonProps {
  children: ReactNode;
  isReserveButton: boolean;
  href: string;
  onClick?: () => void;
}

const GreatButton = ({
  children,
  isReserveButton,
  href,
  onClick,
}: GreatButtonProps) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className={`${
          isReserveButton
            ? `text-white bg-orange mt-9 flex justify-center items-center gap-3 relative py-4 px-5 w-96 border-none rounded-sm uppercase after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-orange after:bg-transparent after:rounded-sm hover:after:-top-1.5 hover:after:-right-1.5 hover:after:bottom-1 hover:after:left-1 hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:ease-out after:transition-all after:duration-500 hover:after:opacity-40`
            : `text-black bg-white flex justify-center items-center gap-3 relative py-4 px-5 w-60 border-none rounded-sm after:content-[''] after:absolute after:-top-3 after:-right-3 after:bottom-3 after:left-3 after:border-2 after:border-white after:bg-transparent after:rounded-sm hover:after:-top-1.5 hover:after:-right-1.5 hover:after:bottom-1 hover:after:left-1 hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:ease-out after:transition-all after:duration-500 hover:after:opacity-70`
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default GreatButton;
