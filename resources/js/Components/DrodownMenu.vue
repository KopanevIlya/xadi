<template>

  <!-- Settings Dropdown -->
  <div>
    <Dropdown >
      <template #trigger>
                                        <span>
                                            <button
                                                type="button"
                                                class="inline-flex items-center  border border-transparent text-md leading-4 font-bold
                                                desktop:mx-8 laptop:mx-4 tablet:mx-2 rounded-md
                                                focus:outline-none transition ease-in-out duration-150
                                                    text-gray-700 hover:bg-gray-700 hover:text-white  px-3 py-2 text-sm ">

                                              Проекты

                                                <svg
                                                    class="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
      </template>

      <template #content>
        <DropdownLink :href="route('profile.edit')"> Профиль </DropdownLink>
        <DropdownLink :href="route('logout')" method="post" as="button">
          Выйти
        </DropdownLink>
      </template>
    </Dropdown>
  </div>



</template>

<script>


import {defineComponent} from "vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";

export default defineComponent({
  components: {Dropdown, DropdownLink}
})
</script>