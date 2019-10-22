import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const Select = styled.select`
  width: 20%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  float: right;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Input = styled.input`
  width: 60%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;
  }
`;

const BlogWrapper = styled.div``;

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [initialblogPosts, setInitialBlogPosts] = useState([]);
  const [order, setOrder] = useState(false);

  let handleSelectChange = event => {
    setOrder(!order);
    console.log(order);
    setBlogPosts(blogPosts.reverse());
  };

  let handleInputChange = event => {
    let value = event.target.value;
    let filteredBlogpPosts =
      value !== ""
        ? blogPosts.filter(el => el.title.indexOf(value) !== -1)
        : initialblogPosts;

    order ? setBlogPosts(blogPosts.reverse()) : setBlogPosts(blogPosts);
    setBlogPosts(filteredBlogpPosts);
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://upply-interview.herokuapp.com/");
      const data = await response.json();
      let sortedByDate = data.sort((a, b) => a.date < b.date);
      setBlogPosts(sortedByDate);
      setInitialBlogPosts(data);
    }
    getData();
  }, []);

  return (
    <Layout>
      <Input onChange={e => handleInputChange(e)} />
      <Select onChange={e => handleSelectChange(e)}>
        <option value="" hidden>
          Order
        </option>
        <option value="1">asc</option>
        <option value="2">desc </option>
      </Select>
      <BlogWrapper>
        {blogPosts.map(blogPost => (
          <BlogPost
            key={blogPost.id}
            image={`https://upply-interview.herokuapp.com/images/${blogPost.src}`}
            title={blogPost.title}
            text={blogPost.text}
            date={blogPost.date}
          />
        ))}
      </BlogWrapper>
    </Layout>
  );
};

export default Blog;
