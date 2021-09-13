<script setup lang="ts">
import One from './components/One.vue'
import Two from './components/Two.vue'

import { createClient, provideClient, dedupExchange, fetchExchange } from '@urql/vue';
import { cacheExchange } from '@urql/exchange-graphcache';

const client = createClient({
  url: 'http://localhost:3000/graphql',
  // exchanges: [dedupExchange, cacheExchange({}), fetchExchange]
});

provideClient(client);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <One />
  <Two />
</template>