import Link from 'next/link';

import { ROUTER_LOGIN } from '@/constants/routers/default';

const ConfirmReset = () => {
  const mail = 'thang@test.com'; // TODO: currently using fake data. waiting for API. will be handled when API completed.
  return (
    <div className="items-center text-center text-body">
      <div className="mt-14 items-center align-middle sm:text-xs">
        We&apos;ve sent an email to {mail}. Please check for the reset password link.
      </div>
      <div className="mt-[1.5625rem] sm:text-xs">
        <Link href={ROUTER_LOGIN} className="text-accent">
          Click here
        </Link>{' '}
        to direct to login screen.
      </div>
    </div>
  );
};

export default ConfirmReset;
