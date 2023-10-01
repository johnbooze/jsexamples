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

const post = new Post(2468, 1, "Title", "Body text");
$("#userId").text(post.userId);
$("#id").text(post.id);
$("#title").text(post.title);
$("#body").text(post.body);
