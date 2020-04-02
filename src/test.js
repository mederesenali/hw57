let user={
    user_id:123,
    name:"user",
    login:"login",
    password:"password",
    bio:"nio fjafkdsl;fj fdlaskfj",
    isAuthorized:false
}
console.log(user)
let posts={
    id:12,
    post:"kdfjasdjf;",
    dateTime:"02022020",
    like:12,
    author :user
}
console.log(posts)

let comments={
    post:posts,
    commentator:user
}
console.log(comments)

let postsAray=[]

function addPost2Array(post){
    postsAray.push(post)
}
addPost2Array(posts)
console.log(postsAray)

function login(user) {
    return user.isAuthorized=true;

}

