using System;
using System.Collections.Generic;
using System.Linq;
using isntservice.Models;

namespace isntservice.Services {
    public class PostLikeService {
        private List<PostLikeModel> DummyPostLikes = new List<PostLikeModel>();
        private PostLikeModel DummyLikeGen(string postId, string userId){
            return new PostLikeModel{
                Id = Guid.NewGuid(),
                PostId = Guid.Parse(postId),
                UserId = Guid.Parse(userId)
            };
        }

        public PostLikeService(){
            DummyPostLikes.Add(DummyLikeGen("02d8120a-ab01-4166-8877-31b3b50ed7f9","2e1fa959-06c6-4fac-838d-bed9e6a768bf"));
            DummyPostLikes.Add(DummyLikeGen("02d8120a-ab01-4166-8877-31b3b50ed7f9","998a8b4e-4a4d-4da5-96e1-6b0cb1a440a4"));
        }

        public List<PostLikeModel> Get(){
            return DummyPostLikes;
        }

        public List<PostLikeModel> GetByPost(Guid id){
            return DummyPostLikes.Where(p => p.PostId == id).ToList();
        }


    }
}