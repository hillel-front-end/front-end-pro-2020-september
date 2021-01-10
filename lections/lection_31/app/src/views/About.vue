<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="about__modal">
      <Modal v-show="isShowModal">
        <template v-slot:header>
          <div> 
              About Page Modal
          </div>
        </template>

        <template v-slot:body>
          <div> 
              About Page Modal - Body
          </div>
        </template>

        <template v-slot:footer>
          <div> 
              <button @click="toggleModal()">close</button>
          </div>
        </template>
      </Modal>

      <button @click="toggleModal()">show modal</button>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import ModalMixin from '@/mixins/ModalMixin';

export default {
  mixins: [ModalMixin],
  components: {
    Modal
  }
}
</script>
