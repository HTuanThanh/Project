import { Button } from '@/components/Button';
import { Meta } from '@/components/Meta/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Leather Market" description="desc" />}>
      <h1>HELLO HONEY</h1>
      <Button>Click here</Button>
    </Main>
  );
};

export default Index;
