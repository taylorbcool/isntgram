using System;
using isntservice.Services;
using isntservice.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase {
        private readonly PostService _postService;
        private readonly UserService _userService;
        public PostController(PostService postService, UserService userService){
            _postService = postService;
            _userService = userService;
        }

        [HttpGet]
        public ActionResult Get(){
            return Ok(_postService.Get());
        }

        [HttpGet("{id}")]
        public ActionResult Get(string id){
            Guid gId = new Guid();
            if(!Guid.TryParse(id, out gId)){
                return BadRequest("Nice try fucko");
            }
            
            return Ok(_postService.Get(gId));
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