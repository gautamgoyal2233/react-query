import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {  Modal} from "antd";
import FormsE from "./FormsE";
import styled from "styled-components";

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



//   Form.setFieldsValue({
//     username: username
// });

  // const [getReportFiltersInitialValues, setReportFiltersInitialValues] = React.useState({});
  

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
        <FormsE/>
        </Modal>
      </ButtonDIV>

      {/* <br> */}
      <br />
    </DetailsCard>
  );
};

export default Details;
