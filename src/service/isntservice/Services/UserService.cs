using System;
using System.Collections.Generic;
using System.Linq;
using isntservice.Models;

namespace isntservice.Services {
    public class UserService {

        private List<UserModel> DummyUsers = new List<UserModel>();
        private UserModel DummyUserGen(string id, string username, string bio){
            return new UserModel{
                Id = Guid.Parse(id),
                Username = username,
                Created = DateTime.Now,
                Bio = bio
            };
        }
        public UserService(){
            DummyUsers.Add(DummyUserGen("0728a190-c8ca-4da9-ba6f-e69dc2380acc","tbag","Soi based developer"));
            DummyUsers.Add(DummyUserGen("2e1fa959-06c6-4fac-838d-bed9e6a768bf","c","Soi based doctor"));
            DummyUsers.Add(DummyUserGen("998a8b4e-4a4d-4da5-96e1-6b0cb1a440a4","kip","Chad Developer"));
        }
        public List<UserModel> Get(){
            return DummyUsers;
        }

        public UserModel Get(Guid id){
            return DummyUsers.SingleOrDefault(u => u.Id == id);
        }
    }
}