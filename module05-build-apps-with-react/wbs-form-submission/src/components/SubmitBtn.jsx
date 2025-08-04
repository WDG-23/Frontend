import { useFormState, useFormStatus } from 'react-dom';

const SubmitBtn = ({ children }) => {
  const { pending } = useFormStatus();
  // console.log(hook);
  return (
    <button type='submit' className='btn btn-neutral mt-4' disabled={pending}>
      {pending ? 'Loading...' : children}
    </button>
  );
};

export default SubmitBtn;
