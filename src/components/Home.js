import React from "react";
import "../assets/css/home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
          price="$499"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
          price="$499"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Room"
          description="Comfortable private rooms for friends and family"
          price="$499"
        />
      </div>
    </div>
  );
};

export default Home;
