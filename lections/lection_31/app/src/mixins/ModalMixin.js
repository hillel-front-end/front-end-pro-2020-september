export default {
    data: () => ({
        isShowModal: false
    }),
    methods: {
        toggleModal() {
            this.isShowModal = !this.isShowModal;
        }
    }
}