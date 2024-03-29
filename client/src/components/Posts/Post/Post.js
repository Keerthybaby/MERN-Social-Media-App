import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import {useDispatch} from 'react-redux';
import {deletePost,likePost} from '../../../actions/posts';
import { useNavigate } from "react-router-dom";

const Post = ({post,setCurrentId}) => {
  
  const dispatch=useDispatch();
  const classes = useStyles();
  const navigate=useNavigate();

  // if (!post) {
  //   return null; // Or render a loading indicator or error message
  // }
const openPost=()=>navigate(`/posts/${post._id}`);

  
  return (
    <Card className={classes.card} raised elevation={6}>
      {/* <ButtonBase className={classes.cardAction} onClick={openPost}> */}
      <div className={classes.cardAction} onClick={openPost}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile }
        title={post.title } 
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      
      <Typography
            className={classes.title}
            variant="h5"
            gutterBottom
            // component="h2"
          >
            {post.title}
     </Typography>

      <CardContent>

          <Typography
            // className={classes.title}
            variant="body2"
            color="textSecondary"
            gutterBottom
            component="p"
          >
            {post.message}
          </Typography>
      </CardContent>
      {/* </ButtonBase> */}
      </div>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize="small" />&nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
