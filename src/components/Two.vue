<script setup lang="ts">import { useClientHandle } from "@urql/vue";

const handle = useClientHandle();

const { error } = handle.useQuery({ query: `{ me { id }}` });
</script>

<template>
  <pre>{{ error }}</pre>
</template>