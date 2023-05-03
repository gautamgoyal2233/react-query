import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Error from "./Error";
import Loading from "./Loading";
import styled from "styled-components";




const UserDetails = () => {
  const DetailsCard = styled.div`
    background-color: black;
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

  const { id } = useParams();

  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("userdata", getData);

  if (isError) return <Error />;
  if (isLoading) return <Loading />;

  return (
    
    <DetailsCard>

      <h1>{data.name}</h1>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address: {data?.address?.street}</p>
      
    </DetailsCard>
  );
};

export default UserDetails;
