import React, { useState, useEffect } from 'react';
import '../styles/CodeComments.css';

const CodeComments = () => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    try {
      const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
      setComments(savedComments);
    } catch (error) {
      console.error('Error reading comments from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('comments', JSON.stringify(comments));
    } catch (error) {
      console.error('Error writing comments to localStorage:', error);
    }
  }, [comments]);

  const handleCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    if (newCommentText.trim() !== '') {
      setComments([...comments, newCommentText]);
      setNewCommentText('');
    }
  };

  return (
    <div className="comments-container">
      <h5 className='textt'>Code Comments</h5>
      <CommentForm
        newCommentText={newCommentText}
        handleCommentChange={handleCommentChange}
        handleAddComment={handleAddComment}
      />
      <CommentList comments={comments} />
    </div>
  );
};

const CommentForm = ({
  newCommentText,
  handleCommentChange,
  handleAddComment,
}) => (
  <form className="comment-form" onSubmit={handleAddComment}>
    <textarea className='texarea'
      value={newCommentText}
      onChange={handleCommentChange}
      placeholder="Add a comment..."
    />
    <button  className='sub' type="submit">Post Comment</button>
  </form>
);

const CommentList = ({ comments }) => (
  <div>
    {comments.map((comment, index) => (
      <div key={`comment-${index}`} className="comment">
        <p>{comment}</p>
      </div>
    ))}
  </div>
);

export default CodeComments;
