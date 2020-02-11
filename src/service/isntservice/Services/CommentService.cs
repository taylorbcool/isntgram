using System.Collections.Generic;
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
        }
        private List<CommentModel> DummyComments = new List<CommentModel>();
        private CommentModel DummyCommentGen(){
            return new CommentModel();
        }

        public CommentService(){

        }
    }
}