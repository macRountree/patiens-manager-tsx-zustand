import {ReactNode} from 'react';

export const HandleError = ({children}: {children: ReactNode}) => {
  return (
    <p className="text-center bg-red-600 my-4 text-white font-bold p-2 uppercase text-xs">
      {children}{' '}
    </p>
  );
};
