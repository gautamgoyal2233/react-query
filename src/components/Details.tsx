import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button ,Modal, Form, Input, InputNumber,} from "antd";
import { toast } from "react-hot-toast";


import styled from "styled-components";
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

interface Data {
  id: number;
  name: string;
  username: string;
  address: Address;
  email: string;
  phone: string;
  website: string;
  company: Company;
}
type PropsData = {
  item: Data;
};

const DetailsCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(1, 1, 1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;

  & > * {
    margin-bottom: 8px;
  }

  & p {
    font-size: 16px;
    margin: 0;
  }
`;

const ButtonDIV = styled.p`
  width: 80%;
  display: flex;

  justify-content: space-between;
`;

const Name = styled.p``;

const Email = styled.p``;

const PhoneNo = styled.p``;

const Website = styled.p`
  a {
    color: #0077cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CenteredButton = styled.div`
  background-color: rgb(82, 73, 70);
  color: white;
  padding: 4px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  positin: fixed;
`;

const Username = styled.p``;

const Details: React.FC<PropsData> = ({ item }) => {
  const { name, username, email, phone, website, id } = item;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // console.log(item)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  const onFinish = (values: any) => {
    // const newUser = {
      // id : data.length+1,
      // name : values.user.name,
      // username : values.user.name,
      // phone : values.user.phone,
      // email : values.user.email,
      // website : values.user.website,
      // address : {
      //   street : values.user.address.street,
      //   suite : values.user.address.suite,
      //   city : values.user.address.city,
      //   zipcode : values.user.address.zipcode,
      // },
      // company : {
      //   bs : values.user.address.bs

      // }

    // }
    toast.success('Successfully EDITED')

    // data.push(newUser)
    handleCancel()
  };

  return (
    <DetailsCard>
      <Name>Name: {name}</Name>
      <Email>Email: {email}</Email>
      <PhoneNo>Phone: {phone}</PhoneNo>
      <Website>
        {" "}
        Website: <Link to={website}>{website}</Link>{" "}
      </Website>
      <Username>Username: {username}</Username>

      <ButtonDIV>
        <CenteredButton onClick={handleClick}>More Details</CenteredButton>
        <CenteredButton onClick={showModal}>Edit Details</CenteredButton>
        <Modal
          title="EDIT DETAILS"
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
              rules={[{ }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "username"]}
              label="User Name"
              rules={[{ }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label="Phone"
              rules={[{ }]}
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
              rules={[{ }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "address", "suite"]}
              label="Suite"
              rules={[{  }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "address", "city"]}
              label="City"
              rules={[{ }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "address", "zipcode"]}
              label="Zipcode"
              rules={[
                {
                  
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "company", "name"]} label="Company Name">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "company", "catchPhrase"]}
              label="Catchphrase"
            >
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
        </Modal>
      </ButtonDIV>

      {/* <br> */}
      <br />
    </DetailsCard>
  );
};

export default Details;
