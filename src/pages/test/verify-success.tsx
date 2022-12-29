import Link from 'next/link';

import { ROUTER_DASHBOARD } from '@/constants/routers/default';

const VerifySuccess = () => {
  return (
    <div className="items-center text-center text-body">
      <div className="mt-28 items-center align-middle sm:text-xs">Your email address has been verified.</div>
      <div className="mt-[1.5625rem] sm:text-xs">
        <Link href={ROUTER_DASHBOARD} className="text-accent">
          Click here
        </Link>{' '}
        to direct to dashboard screen.
      </div>
    </div>
  );
};

export default VerifySuccess;
