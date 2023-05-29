<template>
  <div class="kartica">
    <h1>{{ naslov }}</h1>

    <p class="kartica-tekst">
      {{ tekst }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MojaKartica",
  props: ["naslov", "tekst"],
};
</script>

<style scoped>
.kartica {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  box-shadow: #394f66;
}

.kartica-tekst {
  margin-top: 30px;
}
</style>
