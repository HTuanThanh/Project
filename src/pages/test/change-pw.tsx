import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';

import { ROUTER_CHANGE_PW_SUCCESS } from '@/constants/routers/default';
import { confirmPw, password } from '@/validation/rules';

const ChangePw = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log('Password: ', values); // TODO: currently using log. waiting for API. will be handled when API completed.
    router.push(ROUTER_CHANGE_PW_SUCCESS);
  };

  return (
    <>
      <div className="mt-14 flex justify-center font-body text-5xl text-body">Reset password</div>
      <div className="flex justify-center">
        <Form
          form={form}
          name="basic"
          layout={'vertical'}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="New password" name="password" required={false} rules={password} hasFeedback>
            <Input.Password className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
          </Form.Item>

          <Form.Item
            label="Confirm new password"
            name="confirm"
            required={false}
            dependencies={['password']}
            hasFeedback
            rules={confirmPw}
          >
            <Input.Password className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
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
                Change
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ChangePw;
