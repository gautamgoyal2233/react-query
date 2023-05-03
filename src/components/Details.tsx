import React from "react";
import { useNavigate ,  Link} from "react-router-dom";

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
  padding: 10px;
  & > * {
    margin-bottom: 8px;
  }

  & p {
    font-size: 16px;
    margin: 0;
  }
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

const Username = styled.p``;



const Details: React.FC<PropsData> = ({ item }) => {
  const { name, username, email, phone, website ,id } = item;
  // console.log(item)

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };
  

  return (
    <DetailsCard>
      <Name>Name: {name}</Name>
      <Email>Email: {email}</Email>
      <PhoneNo>Phone: {phone}</PhoneNo>
      <Website> Website: <Link to={website}>{website}</Link> </Website>
      <Username>Username: {username}</Username>

      <button onClick={handleClick}>View More Details</button>

      {/* <br> */}
      <br />
    </DetailsCard>
  );
};

export default Details;
