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

    /** 
     * @param {Object} o
     * @param {number} o.userId
     * @param {number} o.id
     * @param {string} o.title
     * @param {string} o.body
     * @returns {Post}
    */
    static fromJson({userId, id, title, body}) {
        return new Post(userId, id, title, body);
    }
}

/**
 * @param {number} id
 * @return {Promise<Post>}
 */
async function getPost(id) {
    const url = new URL(id, "https://jsonplaceholder.typicode.com/posts/");
    const response = await fetch(url);
    const json = await response.json();
    return Post.fromJson(json);
}

getPost(1).then(post => console.log(post));
