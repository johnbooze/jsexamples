const { createApp } = Vue;

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

createApp({
  data() {
    return new Post(2468, 1, "Title", "Body text");
  }
}).mount('#app');
