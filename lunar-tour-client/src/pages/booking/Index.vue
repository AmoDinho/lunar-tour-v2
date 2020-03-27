<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Tab 1" key="1">Tab 1</a-tab-pane>
      <a-tab-pane tab="Tab 2" disabled key="2">Tab 2</a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
