<template>
  <div class="sidebar">
    <h3 class="title non-margins">Поиск сотрудников</h3>
    <SearchInput
        :placeholder="'Введите Id или имя'"
        @keydown.enter="getEmployee"
    />
    <div class="results">
      <h3 class="title non-margins">Результаты</h3>
      <span class="text-helper">ничего не найдено</span>
    </div>

  </div>
</template>

<script>
import SearchInput from "./ui/SearchInput.vue";

export default {
  name: 'SideBar',
  components: {
    SearchInput
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async getEmployee() {
      this.isLoading = true
      await this.$store.dispatch('employees/getEmployee', {id: 1})
    }
  },
  computed: {
    employees() {
      return this.$store.getters['employees/getEmployees']
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets";

.sidebar {
  width: 293px;
  height: 100%;
  padding: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 22px;
}

.title {
  font-family: $Montserrat-SemiBold, sans-serif;
  font-size: 16px;
  color: $black;
  line-height: 22.4px;
}

.results {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text-helper {
  font-family: $Montserrat-Regular, sans-serif;
  font-size: 14px;
  color: $text-grey;
  line-height: 17.07px;
}
</style>