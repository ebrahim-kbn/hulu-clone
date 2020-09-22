import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import bgImage from "./images/bg-image.jpg";
import profile from "./images/profile.jpg";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    return () => {};
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        console.log(post);
        return (
          <Post
            key={post.id}
            profilePic={post.profilePic}
            image={post.image}
            message={post.message}
            timestamp={post.timestamp}
            username={post.username}
          />
        );
      })}
    </div>
  );
}

export default Feed;
