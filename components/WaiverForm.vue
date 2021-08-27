<template>
  <div class="content">
    <form @submit.prevent="submit()">
      <b-field class="mb-2" grouped group-multiline>
        <b-field label="Email" expanded>
          <b-input
            v-model.lazy.trim="email"
            @input.native="checkWaiver()"
            type="email"
            required
          />
        </b-field>
      </b-field>

      <b-field grouped group-multiline>
        <b-field label="First Name" expanded>
          <b-input
            v-model.trim="firstName"
            @change.native="checkWaiver()"
            required
          />
        </b-field>
        <b-field label="Last Name" expanded>
          <b-input v-model.trim="lastName" @change.native="checkWaiver()" required />
        </b-field>
      </b-field>

      <b-field grouped group-multiline>
        <b-field label="Month" expanded>
          <b-input
            v-model.lazy.trim="month"
            @input.native="checkWaiver()"
            type="number"
            min="1"
            max="12"
            pattern="\d{2}"
            maxlength="2"
            required
            placeholder="MM"
          />
        </b-field>
        <b-field label="Day" expanded>
          <b-input
            v-model.lazy.trim="day"
            @input.native="checkWaiver()"
            type="number"
            min="1"
            max="31"
            maxlength="2"
            pattern="\d{2}"
            required
            placeholder="DD"
          />
        </b-field>
        <b-field label="Year" expanded>
          <b-input
            v-model.lazy.trim="year"
            @input.native="checkWaiver()"
            type="number"
            min="1900"
            max="2050"
            pattern="\d{4}"
            maxlength="4"
            required
            placeholder="YYYY"
          />
        </b-field>
      </b-field>

      <div v-if="!adult && birthday !== undefined">
        <div class="notification is-danger">
          <strong>
            Parent or guardian is required to complete this waiver.
          </strong>
        </div>

        <h4 class="title is-4">Parent or Guardian</h4>
        <b-field grouped group-multiline>
          <b-field label="First Name" expanded>
            <b-input v-model="parent.firstName" required />
          </b-field>
          <b-field label="Last Name" expanded>
            <b-input v-model="parent.lastName" required />
          </b-field>
        </b-field>

        <b-field label="Email" expanded>
          <b-input v-model="parent.email" type="email" required />
        </b-field>
      </div>

      <button class="button is-primary" type="submit">
        Terms & Agreements
      </button>
    </form>
  </div>
</template>

<script>
import { email, numeric, required } from "vuelidate/lib/validators";

export default {
  props: {
    setWaiver: {
      type: Function,
      default() {}
    },
    next: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      month: undefined,
      day: undefined,
      year: undefined,
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      parent: {
        email: undefined,
        firstName: undefined,
        lastName: undefined
      }
    };
  },
  computed: {
    adult() {
      const birthday = new Date(this.birthday);
      const today = new Date();
      const eighteenYears = 1000 * 3600 * 24 * 365 * 18;
      return today - birthday > eighteenYears;
    },
    birthday() {
      return this.year && this.month && this.day ? `${this.year}-${this.month}-${this.day}` : undefined;
    }
  },
  validations: {
    month: {
      required,
      numeric
    },
    day: {
      required,
      numeric
    },
    year: {
      required,
      numeric
    },
    email: {
      email,
      required
    },
    firstName: {
      required
    },
    lastName: {
      required
    },
    parent: {
      email: {
        email,
        required: required(() => {
          return !this.adult;
        })
      },
      firstName: {
        required: required(() => {
          return !this.adult;
        })
      },
      lastName: {
        required: required(() => {
          return !this.adult;
        })
      },
      required: required(() => {
        return !this.adult;
      })
    }
  },
  methods: {
    async checkWaiver() {
      const { firstName, lastName, email, $v } = this;
      if (
        firstName &&
        lastName &&
        email &&
        !$v.firstName.$invalid &&
        !$v.lastName.$invalid &&
        !$v.email.$invalid
      ) {
        const url = new URL(`${this.$config.serverUrl}/waivers/check`);
        url.search = new URLSearchParams({
          firstName,
          lastName,
          email
        }).toString();

        const res = await fetch(url.toString(), { mode: "cors" });
        if (res.ok) {
          const json = await res.json();
          if (json.length > 0) {
            json[0].accept = true;
            json[0].signature = true;
            this.setWaiver(json[0]);
            this.next({ step: 3 });
          }
        }
      }
    },
    submit() {
      const { adult, birthday, email, firstName, lastName, parent } = this;

      if (!this.$v.$invalid) {
        this.setWaiver({
          adult,
          birthday,
          email,
          firstName,
          lastName,
          parent
        });
        this.next({});
      }
    }
  }
};
</script>

<style scoped>
button[type="submit"] {
  margin-top: 1rem;
}

.notification {
  margin-top: 1.5rem;
}

.switch input[type="checkbox"] + .check {
  background: #ff3860 !important;
}

.switch:hover input[type="checkbox"] + .check {
  background: #ff3860 !important;
}

@media only screen and (max-width: 499px) {
  button[type="submit"] {
    width: 100%;
  }

  .field.is-grouped .field:not(:last-child) {
    margin-right: 0;
  }

  .field.is-grouped .field {
    margin-bottom: 0.5rem;
  }
}
</style>
