import { PencilIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import * as z from 'zod';

import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { FormDrawer } from '@/components/Form/FormDrawer';
import { InputField } from '@/components/Form/InputField';

import { useJokes } from '../api/getJokes';
import { decrement, increment, selectCount } from '../stores';

export const Counter = () => {
  const count = useSelector(selectCount);
  const jokesQuery = useJokes();
  const dispatch = useDispatch();
  const schema = z.object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    bio: z.string(),
  });
  type TestFormDTO = {
    email: string;
    firstName: string;
    lastName: string;
    bio: string;
  };

  return (
    <div>
      <div>{count}</div>
      <button
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80'
        )}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className={clsx(
          'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80'
        )}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <FormDrawer
        isDone={true}
        triggerButton={
          <Button startIcon={<PencilIcon className="h-4 w-4" />} size="sm">
            Update Profile
          </Button>
        }
        title="Update Profile"
        submitButton={
          <Button form="update-profile" type="submit" size="sm">
            Submit
          </Button>
        }
      >
        <Form<TestFormDTO, typeof schema>
          id="update-profile"
          onSubmit={async (values) => {
            await alert({ data: values });
          }}
          options={{
            defaultValues: {
              firstName: 'firstName',
              lastName: 'lastName',
              email: 'email',
              bio: 'bio',
            },
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <InputField
                label="First Name"
                error={formState.errors['firstName']}
                registration={register('firstName')}
              />
              <InputField
                label="Last Name"
                error={formState.errors['lastName']}
                registration={register('lastName')}
              />
              <InputField
                label="Email Address"
                type="email"
                error={formState.errors['email']}
                registration={register('email')}
              />

              <InputField
                label="Bio"
                error={formState.errors['bio']}
                registration={register('bio')}
              />
            </>
          )}
        </Form>
      </FormDrawer>
      {jokesQuery.data?.map((joke, index) => {
        return (
          <span key={index}>
            {joke.punchline}
            <br />
          </span>
        );
      })}
    </div>
  );
};
