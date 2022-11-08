<template>
  <li>
    <div>
      <header>
        <h3>{{ item.name }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ item.description }}</p>
    <nav>
      <a :href="item.link" target="_blank">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
