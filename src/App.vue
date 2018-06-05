<template>
  <div id="app">
    <header class="header">
      <h1>Hello Vue SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts" :key="post.id"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }">
          {{post.id}}. {{post.title}}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
  created() {
    this.getAllPosts()
  },
  methods: {
    getAllPosts() {
      this.$http.get(this.endpoint)
        .then(response => this.posts = response.body, err => console.log(err))}
  }
}
</script>

<style lang="scss">
  body {
    background-color: #b9bbcc
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 90px;
    border-bottom: 2px solid #c9154b;
    text-align: center;
    background: #a5a6e0;
  }

  main {
    display: flex;
    height: calc(100vh - 90px);
    margin-top: 90px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }

  .sidebar {
    flex: 1 0 20%;
    height: 100%;
    overflow-y: auto;
    width: 20%;
    padding: 10px 5px;
    box-sizing: border-box;
    border-right: 2px solid #c9154b;
  }

  .content {
    flex: 1 1 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link {
    display: block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #2c3e50;
  }
</style>
