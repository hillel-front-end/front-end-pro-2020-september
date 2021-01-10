<template>
  <div id="app">
      <header class="header">
        <div class="logo">
          <span> some logo </span>
        </div>
        <router-link to="/">Main</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contacts">Contacts</router-link> 
      </header>
      <main class="main">
        <router-view />
      </main>
      <footer class="footer">
        asdsad
      </footer>
  </div>
</template>

<style lang="scss">
#app {
  padding: 0.1px;
}

* {
  box-sizing: border-box;
}

.header, .footer {
  width: 100%;
  min-height: 100px;
  background-color: red;
  position: fixed;
  left: 0px;
}

.header {
  top: 0px;
}

.footer {
  bottom: 0px;
}

.main {
  margin-top: 100px;
  min-height: 300px;
}

</style>
