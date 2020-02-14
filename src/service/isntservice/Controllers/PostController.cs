using System;
using isntservice.Services;
using isntservice.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase {
        private readonly PostService _postService;
        private readonly UserService _userService;
        private readonly PostLikeService _postLikeService;
        private readonly CommentService _commentService;
        public PostController(
            PostService postService,
            UserService userService,
            PostLikeService postLikeService,
            CommentService commentService
        ){
            _postService = postService;
            _userService = userService;
            _postLikeService = postLikeService;
            _commentService = commentService;
        }

        private PostReturnModel GetPostReturnModel(PostModel post){
            var postLikes = _postLikeService.GetByPost(post.Id);
            var postReturn = new PostReturnModel {
                Id = post.Id,
                UserId = post.UserId,
                ImageURL = post.ImageURL,
                Body = post.Body,
                Created = post.Created,
                UserName = _userService.Get(post.UserId).Username,
                LikeIds = postLikes.Select(p => p.Id).ToList(),
                Likes = postLikes.Count(),
                Comments = GetCommentReturnsForPost(post.Id)
            };
            return postReturn;
        }

        private CommentReturnModel GetCommentReturnModel(CommentModel comment){
            var commentReturn = new CommentReturnModel {
                Id = comment.Id,
                PostId = comment.PostId,
                UserId = comment.UserId,
                Content = comment.Content,
                Created = comment.Created,
                UserName = _userService.Get(comment.UserId).Username
            };

            return commentReturn;
        }

        private List<CommentReturnModel> GetCommentReturnsForPost(Guid postId){
            return _commentService.GetByPostId(postId).Select(c => GetCommentReturnModel(c)).ToList();
        }

        [HttpGet]
        public ActionResult Get(){
            var posts = _postService.Get();
            var postReturns = new List<PostReturnModel>();
            foreach(var post in posts){
                var newPostReturn = GetPostReturnModel(post);
                postReturns.Add(newPostReturn);
            }
            return Ok(postReturns);
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id){
            Guid gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko");
            }
            
            return Ok(GetPostReturnModel(_postService.Get(gId)));
        }

        [HttpPost]
        public ActionResult Post(PostModel newPost){
            // Validate
            var errorList = ValidatePost(newPost);
            if(errorList.Count != 0){
                return BadRequest(errorList);
            }

            newPost = _postService.Create(newPost);
            return Ok(newPost);
        }

        private List<string> ValidatePost(PostModel post){
            var errorList = new List<string>();
            if(_userService.Get(post.UserId) == null){
               errorList.Add("Invalid user_id");
            }
            if(string.IsNullOrEmpty(post.Body)){
                errorList.Add("Invalid body");
            }
            // need to verify linked image is valid
            if(string.IsNullOrEmpty(post.ImageURL)){
                errorList.Add("Invalid image_url");
            }

            return errorList;
        }
    }
}