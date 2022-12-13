import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link/';

const LandingPage = () => {
  return (
    <>
      <Button type="button" variant="solid">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/home">Home</Link>
    </>
  );
};

export default LandingPage;
