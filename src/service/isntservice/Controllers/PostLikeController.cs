using System;
using System.Collections.Generic;
using isntservice.Models;
using isntservice.Services;
using Microsoft.AspNetCore.Mvc;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PostLikeController : ControllerBase {
        private readonly PostLikeService _postLikeService;
        private readonly PostService _postService;
        private readonly UserService _userService;
        public PostLikeController(
            PostLikeService postLikeService,
            PostService postService,
            UserService userService
        ){
            _postLikeService = postLikeService;
            _postService = postService;
            _userService = userService;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_postLikeService.Get());
        }

        [HttpGet("post/{id}")]
        public ActionResult Get(string id){
            var gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko!");
            }
            return Ok(_postLikeService.GetByPost(gId));
        }

        [HttpPost]
        public ActionResult Post(PostLikeModel newPostLike){
            var errorList = ValidatePostLike(newPostLike);
            if(errorList.Count != 0){
                return BadRequest(errorList);
            }
            newPostLike.Id = Guid.NewGuid();
            _postLikeService.Create(newPostLike);
            return Ok(newPostLike);
        }

        private List<string> ValidatePostLike(PostLikeModel postLike){
            var errorList = new List<string>();
            // Check user
            if(_userService.Get(postLike.UserId) == null){
                errorList.Add("Invalid user_id");
            }
            if(_postService.Get(postLike.PostId) == null){
                errorList.Add("Invalid post_id");
            }
            return errorList;
        }

    }
}