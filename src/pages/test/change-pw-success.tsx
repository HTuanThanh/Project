import Link from 'next/link';

import { ROUTER_DASHBOARD } from '@/constants/routers/default';

const ChangePwSuccess = () => (
  <div className="items-center text-center">
    <div className="mt-14 items-center align-middle text-body sm:text-xs">
      Your password has been changed successfully.
    </div>
    <div className="mt-[1.5625rem] sm:text-xs">
      <Link href={ROUTER_DASHBOARD} className="text-accent">
        Click here
      </Link>{' '}
      to direct to dashboard screen.
    </div>
  </div>
);

export default ChangePwSuccess;
