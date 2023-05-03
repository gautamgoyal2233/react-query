import React from "react";
import Details from "./Details";
import { useQuery } from "react-query";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";
import { Modal, Form, Input, InputNumber, Button } from "antd";
import { toast } from "react-hot-toast";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;

  geo: {
    lat: string;
    lng: string;
  };
}

interface company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Data {
  id: number;
  name: string;
  username: string;
  address: address;
  email: string;
  phone: string;
  website: string;
  company: company;
}

const ParentContainer = styled.div`
  background-color: rgb(78 76 52);
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-basis: 30%;
  height : 100%;



`;

const ButtonContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const CenteredButton = styled.div`
  background-color: rgb(82 73 70);
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius : 5px;
 
`;

const UserData: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("userdata", getData);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const newUser = {
      id : data.length+1,
      name : values.user.name,
      username : values.user.name,
      phone : values.user.phone,
      email : values.user.email,
      website : values.user.website,
      address : {
        street : values.user.address.street,
        suite : values.user.address.suite,
        city : values.user.address.city,
        zipcode : values.user.address.zipcode,
      },
      company : {
        bs : values.user.address.bs

      }

    }
    toast.success('Successfully Added!')

    data.push(newUser)
    handleCancel()
  };
  if (isError) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <>
      <ButtonContain>
        <CenteredButton onClick={showModal}>Add More User</CenteredButton>
      </ButtonContain>
      <Modal
        title="ADD USER DATA"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "username"]}
            label="User Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Phone"
            rules={[{ required: true }]}
          >
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
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address", "suite"]}
            label="Suite"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address", "city"]}
            label="City"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'address', 'zipcode']}
            label="Zipcode"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
       
          <Form.Item name={['user', 'company', 'name']} label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'company', 'catchPhrase']} label="Catchphrase">
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'company', 'bs']} label="Business Scope">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {data.length > 0 ? (
        <ul>
          <ParentContainer>
            {data.map((item: Data, index: number) => {
              return (
                <div key={index}>
                  <Details item={item} />
                </div>
              );
            })}
          </ParentContainer>
        </ul>
      ) : (
        " "
      )}
    </>
  );
};

export default UserData;
