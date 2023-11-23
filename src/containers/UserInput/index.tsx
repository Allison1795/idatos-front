import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createPlaylist } from "../../services/public.service";

import './style.scss';
import Loader from "../../components/loader";

type FormData = {
  userInput: string;
};

const UserInput = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(''); // Set the type of error state

  const {
    handleSubmit,
    watch,
    register,
  } = useForm<FormData>(); // Specify the form data type

  useEffect(() => {
    if (error) setError(null); // Set error to null instead of an empty string
  }, [watch('userInput'), error]);

  const onSubmit: SubmitHandler<FormData> = async ({ userInput }) => {
    setIsLoading(true);

    try {
      localStorage.removeItem('playlist');

      const data = await createPlaylist(userInput);
      navigate(
        '/playlist',
        {
          state: {
            movie_name: userInput,
            playlist: data.playlist,
            image: data.image,
          },
        },
      );
    } catch ({ response: { data: { error } } }) {
      setError(error || 'Something went wrong! Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="user-input">
      <h1 className="user-input__title">
        Enter the title of the film so we can create the playlist!
      </h1>
      <form
        className="user-input__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="user-input__input"
          placeholder="Movie name..."
          {...register('userInput')}
        />
        <button
          type="submit"
          className="user-input__button"
          disabled={!watch('userInput') || isLoading}
        >
          Create playlist!
        </button>
        {error && (<p className="user-input__error">{error}</p>)}
      </form>
    </div>
  );
};

export default UserInput;
