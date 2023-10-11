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
      postResponse: null
    };
  },
  computed: {
    post() { return this.postResponse?.data },
    error() { return this.postResponse?.error }
  },
  methods: {
    async getPost(id) {
      try {
        this.postResponse = null;
        const url = new URL(id, "https://jsonplaceholder.typicode.com/posts/");
        const response = await fetch(url);
        if (response.ok) {
          /** @type {Post} */
          const json = await response.json();
          this.postResponse = { data: json };
        } else {
          this.postResponse = { error: `Couldn't load post. Response: ${response.status} ${response.statusText}` };
        }
      } catch (e) {
        this.postResponse = { error: e };
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
