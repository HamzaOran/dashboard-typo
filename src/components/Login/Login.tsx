import Button from '@mui/material/Button';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome {session?.user?.name}</p>
        <Button variant={'contained'} color={'error'} onClick={() => signIn()}>
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <h2>Please log in</h2> <br />
      <Button variant={'contained'} color={'primary'} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
