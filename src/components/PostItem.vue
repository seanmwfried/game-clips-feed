<template>
  <article>
      <div class="header-container">
          <div class="header-title">{{title}}</div>
          <div class="header-subheader">
            <div class="header-tags">
                <span class="tag" v-for="tag in tags" :key="tag">#{{tag}}&nbsp;</span>
            </div>
            <div class="header-author">
                {{author}}
            </div>
          </div>
      </div>
      <div class="video-container">
          <video :src="videoSource" muted loop controls></video>
      </div>
  </article>
</template>

<script>
export default {
    props: ['title', 'tags', 'videoSource', 'author']
}
</script>

<style scoped>
    article {
        box-shadow: 0px 0px 10px 2.5px var(--darkgray);
        border-radius: var(--roundness);
        overflow: hidden;
        margin: 20px 0px;
    }

    .header-container {
        padding: 10px;
    }

    .header-title {
        font-size: 1.5em;
    }

    .header-subheader {
        display: flex;
        justify-content: space-between;
    }

    .tag, .header-author {
        color: var(--green);
        user-select: none;
    }

    .tag:hover, .header-author:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .video-container {
        margin-bottom: -10px;
    }

    video {
        width: 100%;
        height: auto;
        margin: 0;
    }
</style>