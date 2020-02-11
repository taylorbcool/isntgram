using System;
using isntservice.Services;
using Microsoft.AspNetCore.Mvc;

namespace isntservice.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PostLikeController : ControllerBase {
        private readonly PostLikeService _postLikeService;
        public PostLikeController(PostLikeService postLikeService){
            _postLikeService = postLikeService;
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

    }
}