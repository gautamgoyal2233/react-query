import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const FormsE = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      // initialValues ={{ Name: "default value" }}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name={["user", "name"]} label="Name" rules={[{}]}>
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
      <Form.Item name={["user", "company", "bs"]} label="Business Scope">
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
