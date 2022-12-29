import { Button, Form, Input } from 'antd';
import type { NamePath } from 'antd/es/form/interface';
import { useRouter } from 'next/router';

import { confirmPw, password } from '@/validation/rules';

const ChangePw = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log('Password: ', values); // TODO: currently using log. waiting for API. will be handled when API completed.
    router.push('/test/change-pw-success');
  };

  return (
    <div className="m-7 text-body">
      <div className="mb-7 text-[2rem] font-semibold leading-none">Change password</div>
      <Form form={form} name="basic" layout={'vertical'} onFinish={onFinish} autoComplete="off">
        <Form.Item label="Current password" name="current" required={false} rules={password} hasFeedback>
          <Input.Password className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} />
        </Form.Item>
        <Form.Item
          label="New password"
          name="password"
          required={false}
          dependencies={['current']}
          rules={[
            ...password,
            ({ getFieldValue }: { getFieldValue: (name: NamePath) => any }) => ({
              validator(_: any, value: any) {
                if (!value || getFieldValue('current') !== value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('New password must different from current password.'));
              }
            })
          ]}
          hasFeedback
        >
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
            <div className="relative mb-12">
              <Button
                type={undefined}
                htmlType="submit"
                disabled={!!form.getFieldsError().filter(({ errors }) => errors?.length).length}
                className="absolute right-0 h-11 w-36 bg-accent font-bold text-white enabled:hover:text-white "
              >
                Save
              </Button>
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePw;
