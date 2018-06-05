<template>
  <div id="app">
    <header>
      <h1>Hello Vue SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <ul type="1" >
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
        </ul>
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
</style>
