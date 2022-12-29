import { Button, Form, Input } from 'antd';
import Link from 'next/link';

import { ROUTER_FORGET_PW, ROUTER_REGISTER } from '@/constants/routers/default';
import { passwordLogin, usernameLogin } from '@/validation/rules';

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values); // TODO: currently using log. waiting for API. will be handled when API register completed.
  };

  return (
    <>
      <div className="mt-14 flex justify-center font-body text-5xl text-body">Login</div>
      <div className="mt-10 flex justify-center">
        <Form
          form={form}
          name="basic"
          layout={'vertical'}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="" name="username" required={false} rules={usernameLogin} className="mb-4">
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} placeholder="Username" />
          </Form.Item>

          <Form.Item label="" name="password" required={false} rules={passwordLogin} hasFeedback className="mb-2">
            <Input.Password
              className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]"
              maxLength={255}
              placeholder="Password"
            />
          </Form.Item>
          <Link href={ROUTER_FORGET_PW} className="mb-5 font-sans text-base text-dark">
            Forgot password?
          </Link>
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
                Log in
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className="mb-16 text-center sm:text-xs">
        <span className="">Don&apos;t have an account yet? </span>{' '}
        <Link href={ROUTER_REGISTER} className="text-accent">
          Create account
        </Link>
      </div>
    </>
  );
};

export default Login;
