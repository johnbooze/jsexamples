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
    return {
      id: 'a',
      post: null,
      error: null
    };
  },
  methods: {
    async getPost(id) {
      try {
        this.error = null;
        this.post = null;
        const url = new URL(id, "https://jsonplaceholder.typicode.com/posts/");
        const response = await fetch(url);
        if (response.ok) {
          /** @type {Post} */
          const json = await response.json();
          this.post = json;
        } else {
          this.error = `Couldn't load post. Response: ${response.status} ${response.statusText}`;
        }
      } catch (e) {
        this.error = e;
      }
    }
  },
  watch: {
    id: {
      handler(newId, oldId) {
        this.getPost(newId);
      },
      immediate: true // Run this on load, too
    }
  }
}).mount('#app');
