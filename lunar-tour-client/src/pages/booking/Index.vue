<template>
  <div>
    <ApolloMutation
      :mutation="require('../../graphql/makeABooking.gql')"
      :variables="{
        size: parseInt(number),
        customerEmail: email,
        bookingDate: date,
        listingId: this.$route.params.id,
        customers: customers
      }"
    >
      <template v-slot="{ mutate, loading, error, data }">
        <a-tabs v-model="activeKey">
          <a-tab-pane tab="Tab 1" key="1">
            <div class="flex flex-col">
              <HeadingOne text="Booking for Listing Name" />

              <BodyOne text="Booking date" />
              <input placeholder="date" type="date" v-model="date" />

              <input placeholder="3" type="number" v-model="number" />

              <input placeholder="email" type="email" v-model="email" />
              <button @click="next(2)">next</button>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="Tab 2" key="2" class="text-black"
            >Page 2
            <div>
              <div v-for="(customer, i) in customers" :key="i">
                <label>customer name</label>
                <input v-model="customer.name" />
                <label>customer surname</label>
                <input v-model="customer.Surname" />
                <label>customer country</label>
                <input v-model="customer.country" />
                <label>passport number </label>
                <input v-model="customer.passportNumber" />
                <label>Physio score </label>
                <input v-model="customer.physioScore" />
                <button @click="removeCustomer(i)">Remove customer</button>
              </div>
              <button @click="addCustomer">Add another customer</button>
            </div>
            <button @click="next(1)">back</button>

            <p v-if="error">An error occurred: {{ error }}</p>
            <p v-if="loading">Busy submitting</p>
            <p v-if="data">look {{ data }}</p>

            <button @click="mutate()">Submit</button>
          </a-tab-pane>
          <a-tab-pane tab="Tab 3" key="3"
            >Page 3

            <button @click="next(2)">back</button>
          </a-tab-pane>
        </a-tabs>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";

export default {
  name: "Index",
  components: {
    HeadingOne,
    BodyOne
  },
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
      // const o = [...this.customers];
      this.customers.push({
        name: null,
        Surname: null
      });

      // this.customers.push({ o });
      // console.log(this.customers);
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
