import { Button, Form, Input } from 'antd';
import type { Rule } from 'antd/es/form';
import Link from 'next/link';

import { ROUTER_LOGIN } from '@/constants/routers/default';
import { confirmPw, email, firstName, lastName, password, userName } from '@/validation/rules';

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values); // TODO: currently using log. waiting for API. will be handled when API register completed.
  };

  return (
    <>
      <div className="mt-14 flex justify-center font-body text-5xl text-body">Register</div>
      <div className="flex justify-center">
        <Form
          form={form}
          name="basic"
          layout={'vertical'}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="First name" name="firstname" required={false} rules={firstName}>
            <Input className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>

          <Form.Item label="Last name" name="lastname" required={false} rules={lastName}>
            <Input className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            required={false}
            rules={[
              ...(email as Rule[]),
              {
                validator(_, value) {
                  // TODO: currently using fake data. waiting for API. will be handled when API completed.
                  if (value && value === 'thang@test.com') {
                    return Promise.reject(new Error('Email already existed.'));
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            required={false}
            rules={[
              ...userName,
              {
                validator(_: any, value: any) {
                  // TODO: currently using fake data. waiting for API. will be handled when API completed.
                  if (value && value === 'Lucifer') {
                    return Promise.reject(new Error('Username already existed.'));
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Input className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>
          <Form.Item label="Password" name="password" required={false} rules={password} hasFeedback>
            <Input.Password className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            required={false}
            dependencies={['password']}
            hasFeedback
            rules={confirmPw}
          >
            <Input.Password className="min-h-[2.75rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type={undefined}
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                className="mt-2.5 min-h-[2.75rem] min-w-[28rem] bg-accent font-bold text-white enabled:hover:text-white sm:min-w-[80vw]"
              >
                Register
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className="mb-16 text-center sm:text-xs">
        <span className="">Have an account already? </span>{' '}
        <Link href={ROUTER_LOGIN} className="text-accent">
          Log in
        </Link>
      </div>
    </>
  );
};

export default Register;
