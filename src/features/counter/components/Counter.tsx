import { useDispatch, useSelector } from 'react-redux';
import * as z from 'zod';

import { ReactComponent as OpenLogo } from '@/assets/open.svg';
import { Button } from '@/components/Elements/Button';
import { Form } from '@/components/Form/Form';
import { FormDrawer } from '@/components/Form/FormDrawer';
import { InputField } from '@/components/Form/InputField';

// import { useJokes } from '../api/getJokes';
import { decrement, increment, selectCount } from '../stores';

export const Counter = () => {
  const count = useSelector(selectCount);
  // const jokesQuery = useJokes();
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
    <>
      <div>{count}</div>
      <Button className="mx-2" variant="text" onClick={() => dispatch(increment())}>
        UP
      </Button>
      <Button className="mx-2" variant="contained" onClick={() => dispatch(decrement())}>
        DOWN
      </Button>
      <FormDrawer
        isDone={true}
        triggerButton={
          <Button variant="icon" className="">
            <OpenLogo className="fill-[rgba(27,27,31,0.48)] hover:fill-primary-30" />
          </Button>
        }
        title="Update Profile"
        submitButton={
          <Button form="update-profile" type="submit">
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
      {/* {jokesQuery.data?.map((joke, index) => {
        return (
          <span key={index}>
            {joke.punchline}
            <br />
          </span>
        );
      })} */}
    </>
  );
};
