<template>
  <div class="sidebar">
    <h3 class="title non-margins">Поиск сотрудников</h3>
    <SearchInput
        :placeholder="'Введите Id или имя'"
        @keydown.enter="getEmployee"
        @input="setValue"
    />
    <div class="results">
      <h3 class="title non-margins">Результаты</h3>
      <span class="text-helper">ничего не найдено</span>
    </div>
    <div
        v-for="employee in employees"
        class="user-list"
    >
      <UserPreview
          :employee="employee"
          :key="employee.id"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "./ui/SearchInput.vue";
import UserPreview from "./UserPreview.vue";

export default {
  name: 'SideBar',
  components: {
    UserPreview,
    SearchInput
  },
  data() {
    return {
      isLoading: false,
      searchValue: '',
      queryParams: '',
    }
  },
  methods: {
    setValue(value) {
      return this.searchValue = value
    },
    containsNumber(query) {
      return query.some(char => !isNaN(char) && char !== ' ');
    },
    checkValue() {
      const test = this.searchValue.replaceAll(/,/g, '').split(' ');
      if (this.containsNumber(test)){
        this.queryParams = test.map(id => `id=${id}`).join('&')
        console.log(this.queryParams)
        return
      }
      this.queryParams = test.map(id => `username=${id}`).join('&')
    },
    async getEmployee() {
      this.checkValue()
      this.isLoading = true
      await this.$store.dispatch('employees/getEmployee', {query: this.queryParams})
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