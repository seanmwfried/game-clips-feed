<template>
  <main>
    <filter-menu></filter-menu>
    <section class="feed-container">
      <div class="feed">
        <post-item 
          v-for="(post, index) in postData"
          :key="index"
          :title="post.title" 
          :tags="post.tags" 
          :videoSource="post.videoSource" 
          :author="post.author"
        ></post-item>
      </div>
    </section>
  </main>
</template>

<script>
import FilterMenu from "@/components/feed/FilterMenu.vue";
import PostItem from '../components/PostItem.vue';

export default {
  components: {
    FilterMenu,
    PostItem
  },

  data: () => ({
    postData: [{
      title: 'Camouflage Winston',
      tags: ['Winston', '0k'],
      videoSource: '/winston.mp4',
      author: 'someRedditPerson'
    },
    {
      title: 'Team Boop',
      tags: ['Lucio', '6k', 'no-ult'],
      videoSource: '/lucio.mp4',
      author: 'dudeguy123'
    },
    {
      title: 'Hamster Bait',
      tags: ['Roadhog', '1k'],
      videoSource: '/hamster.mp4',
      author: 'yab0i'
    }]
  }),

}
</script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: 325px 1fr;
    height: 100vh;
  }

  .feed-container {
    width: 100%;
    overflow: auto;
  }

  .feed {
    padding-top: 25vh;
    padding-bottom: 25vh;
    max-width: 800px;
    margin: 0px 100px;
  }
</style>