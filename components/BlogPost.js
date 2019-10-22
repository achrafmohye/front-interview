import styled from "styled-components";
import Head from "next/head";
import { useEffect } from "react";

const Wrapper = styled.div`
  padding-right: 5px;
  margin-top: 2vh;
  height: 20vh;
  background-color: #fff;
  border-radius: 30px;
  width: 100%;
  display: grid;
  cursor: pointer;

  grid-template-areas:
    "image title price"
    "image desc desc"
    "image desc desc";
`;

const BlogImage = styled.img`
  margin: auto;
  padding: 1vw;
  height: 20vh;
  width: 20vw;
  border-radius: 30px 40px 40px 30px;
  grid-area: image;
`;

const Title = styled.span`
  grid-area: title;
  font-size: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 1vh;
  min-width: 20vw;x
`;

const DateWrapper = styled.div`
  grid-area: price;
  justify-self: end;
  margin-right: 15px;
  padding-top: 1vh;
`;

const BlogDate = styled.div`
  font-size: 15px;
`;

const Text = styled.div`
  grid-area: desc;
  color: #898989;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BlogPost = ({ image, title, text, date }) => {
  let convertDate = date => {
    const newDate = new Date(date);
    console.log(newDate.getDate.toString);
    return newDate;
  };

  useEffect(() => {
    console.log("convertDate(date)", convertDate(date));
  });

  return (
    <Wrapper>
      <BlogImage src={image} alt="blogPost" />

      <Title>{title.substr(0, 100)}</Title>
      <DateWrapper>
        <BlogDate>{convertDate(date).toDateString()}</BlogDate>
      </DateWrapper>

      <Text>{text}</Text>
    </Wrapper>
  );
};

export default BlogPost;
