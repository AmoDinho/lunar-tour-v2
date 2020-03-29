<template>
  <div>
    <a-tabs v-model="activeKey">
      <a-tab-pane tab="Tab 1" key="1">
        page 1
        <input placeholder="date" type="date" />

        <input placeholder="3" type="number" />

        <input placeholder="email" type="email" />
        <button @click="next(2)">next</button>
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" class="text-black"
        >Page 2
        <input placeholder="3" type="number" />

        <input placeholder="email" type="email" />
        <button @click="next(2)">back</button>

        <button @click="next(3)">next</button>
      </a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3">Page 3</a-tab-pane>
      <button @click="next(2)">back</button>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeKey: "1"
    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    }
  }
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}
</style>
