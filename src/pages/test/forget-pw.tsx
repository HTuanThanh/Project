import { Button, Form, Input } from 'antd';
import type { Rule } from 'antd/es/form';
import Link from 'next/link';

import { ROUTER_LOGIN } from '@/constants/routers/default';
import { email } from '@/validation/rules';

const ForgetPw = () => {
  const [form] = Form.useForm();
  const onFinish = (values: { email: string }) => {
    console.log('Email:', values?.email); // TODO: currently using log. waiting for API. will be handled when API completed.
  };

  return (
    <>
      <div className="mt-14 flex justify-center font-body text-5xl text-body">Forgot password</div>
      <div className="flex justify-center">
        <Form
          form={form}
          name="basic"
          layout={'vertical'}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="Email" name="email" required={false} rules={email as Rule[]}>
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type={undefined}
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                className="mt-2.5 min-h-[2.5rem] min-w-[28rem] bg-accent font-bold text-white enabled:hover:text-white sm:min-w-[80vw]"
              >
                Reset
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className="mb-16 text-center sm:text-xs">
        <Link href={ROUTER_LOGIN} className="text-accent">
          Back to login
        </Link>
      </div>
    </>
  );
};

export default ForgetPw;
