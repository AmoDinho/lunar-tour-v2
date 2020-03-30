<template>
  <div>
    <!-- mutation --->
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
        <!-- TAB ONE --->

        <a-tabs v-model="activeKey">
          <a-tab-pane tab="Tab 1" key="1" class="flex justify-center">
            <div class="flex flex-col p-20 ">
              <HeadingOne text="Booking for Listing Name" />

              <div class="mt-5">
                <BodyOne text="Booking date" />
                <DateInput placeholder="date" type="date" v-model="date" />
              </div>

              <div class="mt-5">
                <BodyOne text="Number of people" />
                <Input placeholder="3" type="number" v-model="number" />
              </div>

              <div class="mt-5">
                <BodyOne text="Email address" />
                <Input
                  placeholder="doku@corrisant.io"
                  type="email"
                  v-model="email"
                />
              </div>
              <div class="flex flex-row mt-5">
                <RedBlockButton @click="next(2)" text="Proceed" class="mr-5" />
                <RedOutlineButton @click="$router.push('/')" text="Cancel" />
              </div>
            </div>
          </a-tab-pane>

          <!-- TAB ONE  END--->

          <!-- TAB TWO --->

          <a-tab-pane
            tab="Tab 2"
            key="2"
            class="text-black flex justify-center"
          >
            <div class="flex flex-col p-20 ">
              <HeadingOne text="Who are you travelling with?" />

              <div
                class="flex flex-row"
                v-for="(customer, i) in customers"
                :key="i"
              >
                <div class="flex flex-col">
                  <label>customer name</label>
                  <input v-model="customer.name" />
                  <label>customer country</label>
                  <input v-model="customer.country" />
                  <label>Physio score </label>
                  <input v-model="customer.physioScore" />
                </div>

                <div class="flex flex-col">
                  <label>customer surname</label>
                  <input v-model="customer.Surname" />

                  <label>passport number </label>
                  <input v-model="customer.passportNumber" />
                  <button @click="removeCustomer(i)">Remove customer</button>
                </div>
              </div>
              <RedBlockButton
                text="Add another customer"
                @click="addCustomer"
              />
              <div class="flex flex-row mt-5">
                <RedBlockButton @click="next(3)" text="Proceed" class="mr-5" />
                <RedOutlineButton @click="next(1)" text="Back" />
              </div>
            </div>
          </a-tab-pane>
          <!-- TAB TWO  END--->
          <!-- TAB THREE --->

          <a-tab-pane
            tab="Tab 3"
            key="3"
            class="text-black flex justify-center"
          >
            Page 3

            <button @click="next(2)">back</button>

            <p v-if="error">An error occurred: {{ error }}</p>
            <p v-if="loading">Busy submitting</p>
            <p v-if="data">look {{ data }}</p>

            <button @click="mutate()">Submit</button>
          </a-tab-pane>
          <!-- TAB THREE END--->
        </a-tabs>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
import HeadingOne from "../../components/typography/HeadingOne";
import BodyOne from "../../components/typography/BodyOne";
import DateInput from "../../components/inputs/DateInput";
import Input from "../../components/inputs/Input";
import RedBlockButton from "../../components/buttons/RedBlockButton";
import RedOutlineButton from "../../components/buttons/RedOutlineButton";

export default {
  name: "Index",
  components: {
    HeadingOne,
    BodyOne,
    DateInput,
    Input,
    RedBlockButton,
    RedOutlineButton
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
