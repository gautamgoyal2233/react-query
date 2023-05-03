import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;

  geo: {
    lat: string;
    lng: string;
  };
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


interface Props {
  name: string;
  username: string;
  address : Address;
  company : Company;
  email: string;
  phone: string;
  website: string;
}

const FormsE: React.FC<Props> = (props) => {
  console.log(props);
  const onFinish = (values: any) => {
    console.log(values);
  };
  const initialValues = {
    user: {
      Name: props.name,
      username: props.username,
      phone: props.phone,
      email: props.email,
      website: props.website,
      address: {
        street: props.address.street,
        suite: props.address.suite,
        city: props.address.city,
        zipcode: props.address.zipcode
      },
      company: {
        name: props.company.name,
        catchPhrase: props.company.catchPhrase
      }
    }
  };
  // React.useEffect(() => Form.resetFields(), [props.initialValues]);
  return (
    <Form
      {...layout}
      name="nest-messages"
      // initialValues ={{ Name: "default value" }}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
    >
      <Form.Item name={["user", "Name"]} label="Name" rules={[{}]}>
        <Input />
      </Form.Item>
      <Form.Item name={["user", "username"]} label="User Name" rules={[{}]}>
        <Input />
      </Form.Item>
      <Form.Item name={["user", "phone"]} label="Phone" rules={[{}]}>
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "website"]} label="Website">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "address", "street"]}
        label="Street"
        rules={[{}]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "address", "suite"]} label="Suite" rules={[{}]}>
        <Input />
      </Form.Item>
      <Form.Item name={["user", "address", "city"]} label="City" rules={[{}]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "address", "zipcode"]}
        label="Zipcode"
        rules={[{}]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "company", "name"]} label="Company Name">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "company", "catchPhrase"]} label="Catchphrase">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormsE;
