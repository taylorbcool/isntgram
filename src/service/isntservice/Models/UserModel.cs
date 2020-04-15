using System;
using System.Text.Json.Serialization;

namespace isntservice.Models {
    public class UserModel {
        public Guid Id {get;set;}
        public string Username {get;set;}
        public DateTime Created {get;set;}
        public string Bio {get;set;}
        [JsonIgnore]
        public string Password {get;set;}
        [JsonIgnore]
        public string Salt {get;set;}
    }
}