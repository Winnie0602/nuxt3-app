<script setup lang="ts">
const editMode = ref(false)
</script>

<template>
  <p class="my-5 text-5xl font-bold">Profile</p>
  <hr class="my-5" />
  <div class="flex w-full justify-center">
    <div class="overflow-x-auto">
      <div class="my-5 rounded-full">
        <img src="@/assets/img/user.jpg" />
      </div>
      <table v-if="!editMode" class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover">
            <td>E-mail :</td>
            <td>test@test.com</td>
          </tr>
          <tr class="hover">
            <td>Name :</td>
            <td>Winnie Chang</td>
          </tr>
          <tr class="hover">
            <td>Address :</td>
            <td>Taipei</td>
          </tr>
          <tr class="hover">
            <td>Tel :</td>
            <td>+886 12345678</td>
          </tr>
        </tbody>
      </table>
      <table v-else class="table">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-mail :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
              />
            </td>
          </tr>
          <tr>
            <td>Name :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
              />
            </td>
          </tr>
          <tr>
            <td>Address :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
              />
            </td>
          </tr>
          <tr>
            <td>Tel :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!editMode" class="my-5 flex flex-col items-center">
        <button
          class="btn btn-success btn-outline btn-block my-5 w-4/5"
          @click="editMode = !editMode"
        >
          Edit
        </button>
      </div>

      <div v-else class="my-5 flex flex-col items-center">
        <button
          v-if="editMode"
          class="btn btn-ghost btn-outline btn-block my-1 w-4/5"
          @click="editMode = !editMode"
        >
          Cancel
        </button>
        <button
          v-if="editMode"
          class="btn btn-secondary btn-block my-1 w-4/5"
          @click="editMode = !editMode"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
