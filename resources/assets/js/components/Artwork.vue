<template>
    <div class="container">
        <div v-for="(image, index) in images" class="col-xs-2" style="display: table-cell; vertical-align: middle; float: none;">
              <img class="img-thumbnail" v-lazy="image.src" @click="openGallery(index)">
        </div>
        <lightbox :images="images" ref="lightbox" :show-light-box="false" :show-caption="true"></lightbox>
    </div>
</template>

<script>
    let images = [
      {
        thumb: 'img/artwork01.png',
        src: 'img/artwork01.png'
      },
      {
        thumb: 'img/artwork02.png',
        src: 'img/artwork02.png'
      },
      {
        thumb: 'img/artwork03.png',
        src: 'img/artwork03.png'
      },
      {
        thumb: 'img/artwork04.png',
        src: 'img/artwork04.png'
      },
    ]

    export default {
      data () {
        return {
          images
        }
      },
      methods: {
        openGallery(index) {
          this.$refs.lightbox.showImage(index)
        }
      }
    }
</script>
