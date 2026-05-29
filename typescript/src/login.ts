enum Roles{
    Admin,
    User
}

interface User {
    id: number;
    username: string;
    email: string;
    role: Roles;
}

const user1: User = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    role: Roles.User
};

const user2: User = {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    role: Roles.Admin
};

function adminLogin(user: User) {
    if(user.role === Roles.Admin) {
        console.log(`Admin logged in: ${user.username}`);
    }else{
        console.log("Login Failed")
    }
}

adminLogin(user1);
adminLogin(user2);