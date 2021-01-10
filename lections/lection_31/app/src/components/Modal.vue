<template>
  <div class="modal-window">
      <div class="modal-window__backdrop">
          <div class="modal-window__inner">
                <div class="modal-window__content">
                    <header>
                        <slot name="header"></slot>
                    </header>

                    <hr />

                    <article>
                        <slot name="body"></slot>
                    </article>
                    <hr />

                    <footer>
                        <slot name="footer"></slot>
                    </footer>
                </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
.modal-window {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    z-index: 3;

    &__backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }

    &__inner {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        width: 50%;
        min-height: 500px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        padding: 10px;


        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

</style>