<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  let { content } = data;
</script>

<!-- <textarea rows="10">{content}</textarea> -->

{@html content}

<style>
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 1rem;
    font-family: monospace;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>
