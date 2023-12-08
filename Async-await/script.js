async function userPosts() {
    const response = await fetch (
        "https://jsonplaceholder.typicode.com/posts?userId=3"
    );
    const userData = await response.json();

    const container = document.querySelector(".container");

    userData.forEach((data) => {
        const content = document.createElement("div");
        content.classList.add("content");
        const title = document.createElement("h5");
        title.classList.add("title");
        const post_content = document.createElement("div");
        post_content.classList.add("post_content");

        title.innerText = data["title"];
        post_content.innerText = data["body"]
        
        container.append(content);
        content.append(title, post_content);
    });
    
    console.log(userData);
    return userData;
}

console.log(userPosts().then((data) => console.log(data)))
