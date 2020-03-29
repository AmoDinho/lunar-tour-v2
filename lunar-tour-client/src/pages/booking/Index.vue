<template>
  <div>
    <a-tabs v-model="activeKey">
      <a-tab-pane tab="Tab 1" key="1">
        page 1
        <input placeholder="date" type="date" v-model="date" />

        <input placeholder="3" type="number" v-model="number" />

        <input placeholder="email" type="email" v-model="email" />
        <button @click="next(2)">next</button>
      </a-tab-pane>
      <a-tab-pane tab="Tab 2" key="2" class="text-black"
        >Page 2
        <div>
          <div v-for="(customer, i) in customers" :key="i">
            <label>customer name</label>
            <input v-model="customer.customerName" />
            <label>customer surname</label>
            <input v-model="customer.customerSurname" />
            <button @click="removeCustomer(i)">Remove customer</button>
          </div>
          <button @click="addCustomer">Add another customer</button>
        </div>
        <button @click="next(1)">back</button>

        <button @click="submitForm">Submit</button>
      </a-tab-pane>
      <a-tab-pane tab="Tab 3" key="3"
        >Page 3

        <button @click="next(2)">back</button>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeKey: "1",
      email: "",
      number: "",
      date: "",
      customers: []
    };
  },
  methods: {
    next(k) {
      this.activeKey = k.toString();
    },
    addCustomer() {
      const o = [...this.customers];
      o.push({
        customerName: null,
        customerSurname: null
      });

      this.customers.push({ o });
      console.log(this.customers);
    },

    removeCustomer(i) {
      this.customers.splice(i, 1);
    },
    submitForm() {
      console.log(this.date);
      alert(
        `${this.customers[0].customerName}, ${this.email}, ${this.number}, ${this.date}`
      );
    }
  }
};
</script>
<style>
.ant-tabs-bar.ant-tabs-top-bar {
  display: none;
}
</style>
