import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';

const FETCH_POSTS_QUERY = gql`
  query {
      getPosts {
      id 
    }
  }
` 

export default function Home() {
  const {loading,error, data} = useQuery(FETCH_POSTS_QUERY);
  console.log(FETCH_POSTS_QUERY);

  // if (data) {
  //   console.log(data);
  // }
  return (
    <div><h1>HOME</h1></div>
  )
}  

