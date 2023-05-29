<template>
  <div>
    <h1>Novosti</h1>

    <moja-kartica
      naslov="Prva novost"
      tekst="U VueJS-u sve gledamo kao komponentu"
    />
    <moja-kartica
      naslov="Druga novost"
      tekst="Ovdje smo opet iskoristili moju karticu"
    />
    <moja-kartica naslov="Treca novost" tekst="To je to" />
  </div>
</template>

<script>
import MojaKartica from "@/components/MojaKartica.vue";

export default {
  name: "NewsView",
  components: {
    MojaKartica,
  },
};
</script>
