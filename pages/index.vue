<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        匿名きぼんぬ
      </h1>
      <div class="search-area">
        <v-text-field
          placeholder="すれっどをタイトルとかタグとかで検索"
          prepend-inner-icon="mdi-magnify" />
      </div>
      <div class="button-area">
        <v-btn text color="primary" @click="search">検索する</v-btn>
        <v-btn text color="primary" @click="createThread">すれっどを投稿する</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '../components/Logo'

  export default {
    components: {
      Logo
    },
    methods: {
      search() {
        this.$router.push({name: 'thread'})
      },
      createThread() {
        this.$router.push({name: 'thread-create'})
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 80px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .search-area {
    padding-top: 15px;
  }

  .button-area {
    padding-top: 15px;
  }
</style>
