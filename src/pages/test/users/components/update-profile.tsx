import type { UploadFile, UploadProps } from 'antd';
import { Button, Form, Input, message, Upload } from 'antd';
import type { Rule } from 'antd/es/form';
import type { RcFile } from 'antd/es/upload';
import { useEffect, useState } from 'react';

import { email, firstName, lastName, userName } from '@/validation/rules';

type DataType = {
  avatar: UploadFile;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
};
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UpdateProfile = () => {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState<boolean>(false);
  const [dataTest, setDataTest] = useState<DataType>({
    avatar: {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    firstname: 'Nguyen',
    lastname: 'Thang',
    email: 'thang@test.com',
    username: 'thangnq3'
  });
  const [imageUrl, setImageUrl] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    setFileList([dataTest?.avatar]);
    setImageUrl(dataTest?.avatar?.url as string);
  }, []);

  const onFinish = (values: any) => {
    if (fileList?.length < 1) {
      message.error('Please upload your new avatar');
      return;
    }
    console.log('Success:', values); // TODO: currently using log. waiting for API. will be handled when API register completed.
    setDataTest({ ...values, avatar: fileList[0] });
    setEdit(false);
  };

  const handleChange: UploadProps['onChange'] = async ({ file: newFile }) => {
    let { preview } = newFile;
    if (!newFile.url && !preview) {
      preview = await getBase64(newFile.originFileObj as RcFile);
    }
    setImageUrl(newFile.url || (preview as string));
    setFileList([newFile]);
  };
  return (
    <div className="m-7 text-body">
      <div className="text-[2rem] font-semibold leading-none">Edit Profile</div>
      <Form
        form={form}
        name="basic"
        layout={'vertical'}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={dataTest}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          accept=".png,.jpg"
          className="custom-thumbnail mt-12"
          showUploadList={{ showPreviewIcon: true, showRemoveIcon: edit }}
          itemRender={() => (
            <div className="flex h-full w-full flex-row">
              <div className="max-w-[25%] flex-[0_0_25%]">
                <div className="h-36 w-36 overflow-hidden rounded-[50%]">
                  <img alt="" src={imageUrl} width={150} height={150} />
                </div>
              </div>
              <div className="mt-4 max-w-[75%] flex-[0_0_75%] text-[13px] leading-4">
                Clear frontal face photos are an important way for buyers and sellers to learn about each other.
              </div>
            </div>
          )}
        >
          <div className="text-[13px] font-semibold">Upload a photo</div>
        </Upload>

        <Form.Item label="First name" name="firstname" required={false} className="mb-4" rules={firstName}>
          <Input className="min-h-[2.5rem]" maxLength={255} readOnly={!edit} />
        </Form.Item>
        <Form.Item label="Last name" name="lastname" required={false} className="mb-4" rules={lastName}>
          <Input className="min-h-[2.5rem] " maxLength={255} readOnly={!edit} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          required={false}
          className="mb-4"
          rules={[
            ...(email as Rule[]),
            {
              validator(_, value) {
                // TODO: currently using fake data. waiting for API. will be handled when API completed.
                if (value && value === 'thang123@test.com') {
                  return Promise.reject(new Error('Email already existed.'));
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <Input className="min-h-[2.5rem] " maxLength={255} readOnly={!edit} />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          required={false}
          className="mb-4"
          rules={[
            ...userName,
            {
              validator(_: any, value: any) {
                // TODO: currently using fake data. waiting for API. will be handled when API completed.
                if (value && value === 'thangnq123') {
                  return Promise.reject(new Error('Username already existed.'));
                }
                return Promise.resolve();
              }
            }
          ]}
        >
          <Input className="min-h-[2.5rem] " maxLength={255} readOnly={!edit} />
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

export default UpdateProfile;
