import { Center } from '@chakra-ui/react';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Link } from '@/components/link/';
import { Seo } from '@/components/seo';

const LandingPage = () => {
  return (
    <>
      <Seo title="Jobs App" />
      <Center>
        <Button type="button" variant="solid">
          Click Me
        </Button>
        <br />
        <br />
        <InputField label="Name" />
        <Link href="/home">Home</Link>
      </Center>
    </>
  );
};

export default LandingPage;
