import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { useAuth } from "../store/useAuth";
import { useLocalStorage } from "../store/useLocalStorage";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledSearch = styled.input``;

const fetchData = async () => {};

const Home = () => {
  const { auth, setAuth, setPosts, posts } = useAuth();
  const { getPosts } = useFetch();
  const navigate = useNavigate();
  const { getUserData } = useLocalStorage();

  useEffect(() => {
    const access = getUserData("access");
    if (access !== null) {
      const refresh = getUserData("refresh");
      const username = getUserData("username");
      setAuth(JSON.stringify({ access, refresh, username }));
      const fetchData = async () => {
        const response = await getPosts();
        setPosts(response.data);
      };
      fetchData();
    }
  }, []);

  if (auth === null) return <Navigate to="/login" />;

  return (
    <Wrapper>
      {posts.length === 0 ? (
        <div>No Posts are Disponible Yet</div>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Home;
