using System;
using System.Collections.Generic;
using isntservice.Models;
using isntservice.Services;
using Microsoft.AspNetCore.Mvc;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase {
        private readonly CommentService _commentService;
        private readonly UserService _userService;
        private readonly PostService _postService;
        public CommentController(
            CommentService commentService,
            UserService userService,
            PostService postService
        ){
            _commentService = commentService;
            _userService = userService;
            _postService = postService;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_commentService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult GetAction(string id){
            Guid gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko");
            }

            return Ok(_commentService.Get(gId));
        }

        [HttpPost]
        public ActionResult Post(CommentModel newComment){
            var errorList = ValidateComment(newComment);
            if(errorList.Count != 0){
                return BadRequest(errorList);
            }

            newComment = _commentService.Create(newComment);

            return Ok(newComment);
        }

        private List<string> ValidateComment(CommentModel comment){
            var errorList = new List<string>();
            if(_userService.Get(comment.UserId) == null){
                errorList.Add("Invalid user_id");
            }
            if(_postService.Get(comment.PostId) == null){
                errorList.Add("Invalid post_id");
            }
            if(string.IsNullOrEmpty(comment.Content)){
                errorList.Add("Comment cannot be empty");
            }
            
            return errorList;
        }
    }
}