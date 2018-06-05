<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__body">{{ post.body }}</p>
    <p class="post__id">{{ post.id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      post: [],
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },
  methods: {
    getPost(id) {
      this.$http.get(this.endpoint + id)
        .then(response => this.post = response.body, err => console.log(err))}
  },
  created() {
    this.getPost(this.id)
  },
  watch: {
    '$route'() {
      this.getPost(this.id)
    }
  }
}
</script>
