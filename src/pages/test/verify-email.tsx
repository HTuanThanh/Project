import Link from 'next/link';

import { ROUTER_LOGIN } from '@/constants/routers/default';

const VerifyEmail = () => {
  return (
    <div className="items-center text-center">
      <div className="mt-28 items-center align-middle text-body sm:text-xs">
        Please check your email Inbox and click on the URL attached to verify your account.
      </div>
      <div className="mt-[1.5625rem] sm:text-xs">
        <Link href={ROUTER_LOGIN} className="text-accent">
          Back to log in
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
