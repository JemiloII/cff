<template>
  <div class="content">
    <form class="is-dark" @submit.prevent="submit()">
      <div v-if="!adult && birthday !== undefined">
        <div class="notification is-danger">
          <strong>
            Parent or guardian is required to complete this waiver.
          </strong>
        </div>

        <h4 class="title is-4">Parent or Guardian</h4>
        <b-field label="Parent Email" expanded>
          <b-input
            class="is-dark"
            v-model.lazy.trim="parent.email"
            type="email"
            required
          />
        </b-field>

        <b-field grouped group-multiline>
          <b-field label="Parent First Name" expanded>
            <b-input
              class="is-dark"
              type="text"
              v-model.lazy.trim="parent.firstName"
              @focus="forceTextField($event)"
              required
            />
          </b-field>
          <b-field label="Parent Last Name" expanded>
            <b-input
              class="is-dark"
              type="text"
              v-model.lazy.trim="parent.lastName"
              @focus="forceTextField($event)"
              required
            />
          </b-field>
        </b-field>
      </div>

      <h3 class="h3" v-if="adult">Participant</h3>

      <h3 class="h3" v-if="!adult && birthday !== undefined && year.length === 4">
        Child 1
      </h3>

      <b-field class="mb-2" grouped group-multiline>
        <b-field label="Email" expanded>
          <b-input
            class="is-dark"
            type="email"
            v-model.lazy.trim="email"
            @input.native="checkWaiver()"
            required
          />
        </b-field>
      </b-field>

      <b-field grouped group-multiline>
        <b-field label="First Name" expanded>
          <b-input
            class="is-dark"
            type="text"
            v-model.trim="firstName"
            @change.native="checkWaiver()"
            @focus="forceTextField($event)"
            :key="'participantFirstName'"
            required
          />
        </b-field>
        <b-field label="Last Name" expanded>
          <b-input
            class="is-dark"
            type="text"
            v-model.trim="lastName"
            @change.native="checkWaiver()"
            @focus="forceTextField($event)"
            :key="'participantLastName'"
            required
          />
        </b-field>
      </b-field>

      <h4 class="h4">Birthday</h4>
      <b-field grouped group-multiline>
        <b-field label="Month" expanded>
          <b-input
            class="is-dark"
            type="text"
            v-model.lazy.trim="month"
            min="1"
            max="12"
            v-mask="['##']"
            maxlength="2"
            placeholder="MM"
            required
          />
        </b-field>
        <b-field label="Day" expanded>
          <b-input
            class="is-dark"
            v-model.lazy.trim="day"
            type="text"
            min="1"
            max="31"
            maxlength="2"
            v-mask="['##']"
            placeholder="DD"
            required
          />
        </b-field>
        <b-field label="Year" expanded>
          <b-input
            class="is-dark"
            v-model.lazy="year"
            type="text"
            v-mask="['####']"
            maxlength="4"
            placeholder="YYYY"
            required
          />
        </b-field>
      </b-field>

      <b-field class="pb-2 justify-content-end" v-if="!adult && additionalChildren.length === 0">
        <div>&nbsp;</div>
        <button class="button is-success" @click="addChild()">
          Add Child
        </button>
      </b-field>

      <div id="add-child" v-for="(child, i) in additionalChildren">
        <h3 class="h3">
          Child {{ i + 2 }}
        </h3>
        <b-field class="mb-2" grouped group-multiline>
          <b-field label="Email" expanded>
            <b-input
              :key="'email-child-' + (i + 2)"
              class="is-dark"
              v-model.lazy.trim="child.email"
              type="email"
              required
            />
          </b-field>
        </b-field>

        <b-field grouped group-multiline>
          <b-field label="First Name" expanded>
            <b-input
              :key="'firstName-child-' + (i + 2)"
              class="is-dark"
              type="text"
              v-model.trim="child.firstName"
              @focus="forceTextField($event)"
              required
            />
          </b-field>
          <b-field label="Last Name" expanded>
            <b-input
              :key="'lastName-child-' + (i + 2)"
              class="is-dark"
              type="text"
              v-model.trim="child.lastName"
              @focus="forceTextField($event)"
              required
            />
          </b-field>
        </b-field>

        <h4 class="h4">Birthday</h4>
        <b-field grouped group-multiline>
          <b-field label="Month" expanded>
            <b-input
              :key="'month-child-' + (i + 2)"
              class="is-dark"
              v-model.lazy.trim="child.month"
              type="text"
              maxlength="2"
              v-mask="['##']"
              pattern="\d{2}"
              placeholder="MM"
              required
            />
          </b-field>
          <b-field label="Day" expanded>
            <b-input
              :key="'day-child-' + (i + 2)"
              class="is-dark"
              v-model.lazy.trim="child.day"
              type="text"
              maxlength="2"
              v-mask="['##']"
              pattern="\d{2}"
              placeholder="DD"
              required
            />
          </b-field>
          <b-field label="Year" expanded>
            <b-input
              :key="'year-child-' + (i + 2)"
              class="is-dark"
              v-model.lazy.trim="child.year"
              type="text"
              maxlength="4"
              v-mask="['####']"
              pattern="\d{4}"
              placeholder="YYYY"
              required
            />
          </b-field>
        </b-field>

        <b-field class="pb-2 justify-content-end">
          <div>&nbsp;</div>
          <button class="button is-success mr-1" v-if="additionalChildren.length - 1 === i" @click="addChild()">
            Add Child
          </button>

          <button class="button is-danger" @click="removeChild(i)">
            Remove Child
          </button>
        </b-field>
      </div>

      <b-field class="w-100 justify-content-end">
        <div>&nbsp;</div>
        <button class="button is-dark" type="submit">
          Terms & Agreements
        </button>
      </b-field>
    </form>
  </div>
</template>

<script>
import {alpha, email, numeric, required} from "vuelidate/lib/validators";

export default {
  props: {
    setWaiver: {
      type: Function,
      default() {
      }
    },
    next: {
      type: Function,
      default() {
      }
    }
  },
  data() {
    console.log('setting data hmmm')
    const waiver = localStorage.getItem('waiver');
    let month, year, day, firstName, lastName, email;
    let parent = {};
    let additionalChildren = [];

    if (waiver) {
      console.log('has waiver data???')
      const {
        birthday,
        firstName: fn,
        lastName: ln,
        email: e,
        parent: p,
        additionalChildren: ac
      } = JSON.parse(waiver);
      year = birthday.slice(0, 4);
      month = birthday.slice(5, 7);
      day = birthday.slice(8);
      firstName = fn;
      lastName = ln;
      email = e;
      parent = p;

      if (ac && ac.length > 0) {
        additionalChildren = ac.map(child => {
          child.year = child.birthday.slice(0, 4);
          child.month = child.birthday.slice(5, 7);
          child.day = child.birthday.slice(8);
          return child;
        });
      }
    }

    return {
      month,
      day,
      year,
      email,
      firstName,
      lastName,
      additionalChildren,
      parent
    };
  },
  computed: {
    adult() {
      const birthday = new Date(this.birthday);
      const today = new Date();
      const eighteenYears = 1000 * 3600 * 24 * 365 * 18;
      return this.year === undefined || this.year.length < 4 || today - birthday > eighteenYears;
    },
    birthday() {
      const month = this.month && this.month.length !== 0 && this.month.length === 1 ? '0' + this.month : this.month;
      const day = this.day && this.day.length !== 0 && this.day.length === 1 ? '0' + this.day : this.day;

      return this.year && month && day ? `${this.year}-${month}-${day}` : undefined;
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
    addChild() {
      this.additionalChildren.push({
        month: undefined,
        day: undefined,
        year: undefined,
        email: this.parent.email || this.email,
        firstName: undefined,
        lastName: this.parent.lastName || this.lastName,
      });
    },
    removeChild(i) {
      this.additionalChildren.splice(i, 1);
    },
    async checkWaiver() {
      const {firstName, lastName, email, $v} = this;
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

        const res = await fetch(url.toString(), {mode: "cors"});
        if (res.ok) {
          const json = await res.json();
          if (json.length > 0) {
            json[0].accept = true;
            json[0].signature = true;
            this.setWaiver(json[0]);
            this.next({step: 3});
          }
        }
      }
    },
    forceTextField(event) {
      event.target.setAttribute('type', 'text');
    },
    formatBirthday(year, month, day) {
      return year && month && day ? `${year}-${month}-${day}` : undefined;
    },
    formatAdditionalChildren() {
      return this.additionalChildren.map(child => {
        const {email, firstName, lastName, year, month, day} = child;
        const {parent} = this;
        const birthday = this.formatBirthday(year, month, day);

        return {
          adult: false,
          birthday,
          email,
          firstName,
          lastName,
          parent
        }
      });
    },
    submit() {
      const {adult, birthday, email, firstName, lastName, parent} = this;
      const children = this.formatAdditionalChildren();

      if (!this.$v.$invalid) {
        this.setWaiver({
          adult,
          birthday,
          email,
          firstName,
          lastName,
          children,
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

.input:focus {
  box-shadow: 0 0 0 0.125em #343a40 !important;
  border-color: #343a40 !important;
}

input.checkbox {
  transform: scale(1.5);
  margin: 1rem;
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
