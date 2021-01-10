<template>
  <div class="contacts">
      <ul>
          <li 
            v-for="(contact, $index) in contacts"
            :key="$index"
          >
            {{ contact }}
          </li>

          <button @click="routerGo()">go to</button>
      </ul>


      <div class="contacts-modal">
        <Modal v-show="isShowModal">
            <template v-slot:header>
                <div> 
                    Edit Contacts
                </div>
            </template>

            <template v-slot:body>
                <div> 
                    <label>Some text
                        <input>
                    </label>
                    Contacts Info
                </div>
            </template>

            <template v-slot:footer>
                <div> 
                    <button @click="toggleModal()">close edit contacts</button>
                </div>
            </template>
        </Modal>

      <button @click="toggleModal()">edit contacts</button>
      </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import ModalMixin from '@/mixins/ModalMixin';


export default {
    mixins: [ModalMixin],
    data: () => ({
        contacts: [
            'contact-1',
            'contact-2' 
        ],
    }),
    methods: {
        routerGo() {
            this.$router.push('/about')
        }
    },
    components: {
        Modal
    },
    created() {
        // console.log(this.$router, 'this.$router');
        // setTimeout(() => {
        //     if (true) {
        //         this.$router.push('/about')
        //     }
        // }, 1000)
    }
}
</script>
