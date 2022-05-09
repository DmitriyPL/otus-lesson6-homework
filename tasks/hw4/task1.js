module.exports = { makeUser, addAgetoUser, getAdmin };

function makeUser(name) {
    return {
        name
    };
}

function addAgetoUser(user, age){
    
    user.age = age;
    
    return user;
}

function getAdmin(user){

    const admin = {};
    Object.assign(admin, user);    
    admin.role = "admin";

    return admin
}

function main(){
    
    const name = prompt("Enter your name please.");
    let user = makeUser(name);

    const age = prompt("Enter your age please.");
    addAgetoUser(user, age);

    admin = getAdmin(user);

}

