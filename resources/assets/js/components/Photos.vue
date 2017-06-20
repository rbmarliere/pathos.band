<template>
    <div>
        <div class="container">
            <div class="row">
                    <div v-for="(image, index) in images" class="col-xs-2">
                          <img class="img-thumbnail" v-lazy="image.src" @click="openGallery(index)">
                    </div>
            </div>
        </div>
        <lightbox :images="images" ref="lightbox" :show-light-box="false" :show-caption="true"></lightbox>
    </div>
</template>

<script>
    let images = [
      {
        thumb: 'img/01.jpg',
        src: 'img/01.jpg'
      },
      {
        thumb: 'img/02.jpg',
        src: 'img/02.jpg'
      },
      {
        thumb: 'img/03.jpg',
        src: 'img/03.jpg'
      },
      {
        thumb: 'img/04.jpg',
        src: 'img/04.jpg'
      },
      {
        thumb: 'img/05.jpg',
        src: 'img/05.jpg'
      },
      {
        thumb: 'img/06.jpg',
        src: 'img/06.jpg'
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
