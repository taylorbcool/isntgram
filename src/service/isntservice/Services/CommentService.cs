using System;
using System.Collections.Generic;
using System.Linq;
using isntservice.Models;

namespace isntservice.Services {
    public class CommentService {
        private List<string> CommentList = new List<string>{
            "Wow look at those!!",
            "Big butthole",
            "Love is not an emotion",
            "GIMME",
            "I hate this post",
            "I hate you",
            "Billie Eilish is the greatest artist of all time",
            "Go see Parasite",
            "Pure kino"
        };

        private List<string> UserList = new List<string>{
            "0728a190-c8ca-4da9-ba6f-e69dc2380acc",
            "2e1fa959-06c6-4fac-838d-bed9e6a768bf",
            "998a8b4e-4a4d-4da5-96e1-6b0cb1a440a4"
        };

        private List<string> PostList = new List<string>{
            "02d8120a-ab01-4166-8877-31b3b50ed7f9",
            "b3787c6e-b048-49b0-8b4d-906999ca010e",
            "998a8b4e-4a4d-4da5-96e1-6b0cb1a440a5"
        };
        private List<CommentModel> DummyComments = new List<CommentModel>();

        private string RandSelector(List<string> options){
            var rand = new Random();
            return options[rand.Next(0, options.Count - 1)];
        }

        private CommentModel DummyCommentGen(){
            return new CommentModel(){
                Id = Guid.NewGuid(),
                PostId = Guid.Parse(RandSelector(PostList)),
                UserId = Guid.Parse(RandSelector(UserList)),
                Content = RandSelector(CommentList),
                Created = DateTime.UtcNow
            };
        }

        public CommentService(){
            for(int i = 0; i < 15; i++){
                DummyComments.Add(DummyCommentGen());
            }
        }

        public List<CommentModel> Get(){
            return DummyComments;
        }

        public CommentModel Get(Guid id){
            return DummyComments.SingleOrDefault(c => c.Id == id);
        }

        public CommentModel Create(CommentModel newComment){
            newComment.Id = Guid.NewGuid();
            newComment.Created = DateTime.UtcNow;
            DummyComments.Add(newComment);
            return newComment;
        }
    }
}