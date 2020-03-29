<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane tab="Tab 1" key="1">
        <input placeholder="date" type="date" />

        <input placeholder="3" type="number" />

        <input placeholder="email" type="email" />
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2">Tab 2</a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Tab 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}
</style>
