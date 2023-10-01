class Post {
    /** 
     * @param {number} userId
     * @param {number} id
     * @param {string} title
     * @param {string} body
    */
    constructor(userId, id, title, body) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

function setText(id, value) {
    const element = document.getElementById(id);
    element.textContent = value;
}

const post = new Post(2468, 1, "Title", "Body text");
setText("userId", post.userId);
setText("id", post.id);
setText("title", post.title);
setText("body", post.body);
