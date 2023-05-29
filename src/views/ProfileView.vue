<template>
  <div>
    <h1>This is an profile page. My name is Kristina</h1>

    <zbroji-brojeve broj1="28" broj2="22" />

    <moja-kartica naslov="Prva kartica" tekst="Ovo je moja prva komponenta" />
    <moja-kartica naslov="Druga kartica" tekst="Ovo je moja druga komponenta" />
    <moja-kartica naslov="Treca kartica" tekst="Ovo je moja treca komponenta" />
  </div>
</template>

<script>
import MojaKartica from "@/components/MojaKartica.vue";
import ZbrojiBrojeve from "@/components/ZbrojiBrojeve.vue";

export default {
  name: "ProfileView",
  components: {
    MojaKartica,
    ZbrojiBrojeve,
  },
};
</script>
