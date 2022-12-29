import type { UploadFile, UploadProps } from 'antd';
import { Button, Form, Input, message, Modal, Upload } from 'antd';
import type { Rule } from 'antd/es/form';
import type { RcFile } from 'antd/es/upload';
import Image from 'next/image';
import Link from 'next/link';
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

const Login = () => {
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    setFileList([dataTest?.avatar]);
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

  const handleCancel = () => {
    setPreviewOpen(false);
  };

  const handlePreview = async (file: UploadFile) => {
    let { preview } = file;
    if (!file.url && !preview) {
      preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onCancelEdit = () => {
    form.resetFields();
    setFileList([dataTest?.avatar] || []);
    setEdit(false);
  };

  console.log(fileList);
  return (
    <>
      <div className="mt-[6.25rem] flex justify-center">
        <Image src="/assets/images/leather-market.png" alt="logo" width={200} height={17} priority={true} />
      </div>
      <div className="mt-10 flex justify-center">
        <Form
          form={form}
          name="basic"
          layout={'vertical'}
          onFinish={onFinish}
          autoComplete="off"
          initialValues={dataTest}
        >
          <div className="flex text-center">
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              accept=".png,.jpg"
              showUploadList={{ showPreviewIcon: true, showRemoveIcon: edit }}
              className="custom-thumbnail"
              // itemRender={() => (
              //   <div>
              //     <img
              //       alt="Test"
              //       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              //       width={200}
              //       height={200}
              //     />
              //   </div>
              // )}
            >
              {fileList?.length === 1 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img alt="avatar" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          <Form.Item label="First name" name="firstname" required={false} className="mb-6" rules={firstName}>
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} readOnly={!edit} />
          </Form.Item>
          <Form.Item label="Last name" name="lastname" required={false} className="mb-6" rules={lastName}>
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} readOnly={!edit} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            required={false}
            className="mb-6"
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
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} readOnly={!edit} />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            required={false}
            className="mb-6"
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
            <Input className="min-h-[2.5rem] min-w-[28rem] sm:min-w-[80vw]" maxLength={255} readOnly={!edit} />
          </Form.Item>
          {edit && (
            <div className="flex flex-row justify-center">
              <Form.Item>
                <Button
                  type={undefined}
                  htmlType="submit"
                  className="mx-4 mt-2.5 bg-danger font-bold text-white enabled:hover:text-white sm:min-w-[80vw]"
                  onClick={onCancelEdit}
                >
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    type={undefined}
                    htmlType="submit"
                    disabled={!!form.getFieldsError().filter(({ errors }) => errors?.length).length}
                    className="mx-4 mt-2.5 bg-success font-bold text-white enabled:hover:text-white sm:min-w-[80vw]"
                  >
                    Save
                  </Button>
                )}
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
      {!edit && (
        <div className="mx-4 mb-16 text-center sm:text-xs">
          <Link href={`/test/change-pw`} className="text-black">
            Change password
          </Link>
          <Button
            type={undefined}
            className="mx-4 mt-2.5 bg-success font-bold text-white enabled:hover:text-white sm:min-w-[80vw]"
            onClick={() => setEdit(!edit)}
          >
            Edit profile
          </Button>
        </div>
      )}
    </>
  );
};

export default Login;
