<template>
  <div class="table-container">
    <h1>Список пользователей</h1>
    <v-table>
      <thead>
        <tr>
          <th width="50" class="text-left">
            Id
          </th>
          <th class="text-left">
            Nickname
          </th>
          <th width="50">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.nickname }}</td>
          <td>
            <a href="#" @click="deleteUser(user.id)">
              <trash-icon />
            </a>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>

  import TrashIcon from '@/icons/TrashIcon.vue'

  export default {
    components: {
      TrashIcon
    },
    data () {
      return {
      }
    },
    computed: {
      users() {
        return this.$store.getters['users/list']
      }
    },
    methods: {
      deleteUser(userId) {
        this.$store.commit('users/delete', userId)
      }
    }
  }
</script>

<style lang="scss" scoped>
  td {
    text-align: left;
  }
  .table-container {
    max-width: 1180px;
    margin: auto;
  }
</style>