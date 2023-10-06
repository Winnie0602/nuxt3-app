<script setup lang="ts">
const editMode = ref(false)

type Token = {
  picture: string
  name: string
  email: string
}
type UserData = {
  email: string
  name: string
  gender: string
  address: string
  birthday: string
}

const headers = useRequestHeaders(['cookie']) as HeadersInit
// 取得用戶資料
const { data: userData } = await useFetch<UserData>('/api/me', { headers })
// 取得token
const { data: token } = await useFetch<Token>('/api/token', { headers })
</script>

<template>
  <p class="my-5 text-5xl font-bold">Profile</p>
  <hr class="my-5" />
  <div class="flex w-full justify-center">
    <div class="overflow-x-auto">
      <div class="my-5 rounded-full">
        <img v-if="token && token.picture" :src="token.picture" alt="" />
        <img v-else src="@/assets/img/user.jpg" />
      </div>
      {{ token }}
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
            <td>{{ userData && token && (userData.email || token.email) }}</td>
          </tr>
          <tr class="hover">
            <td>Name :</td>
            <td>{{ userData && token && (userData.name || token.name) }}</td>
          </tr>
          <tr class="hover">
            <td>Gender :</td>
            <td>{{ userData && userData.gender }}</td>
          </tr>
          <tr class="hover">
            <td>Address :</td>
            <td>{{ userData && userData.address }}</td>
          </tr>
          <tr class="hover">
            <td>Birthday :</td>
            <td>{{ userData && userData.birthday }}</td>
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
                :value="userData && token && (userData.email || token.email)"
              />
            </td>
          </tr>
          <tr>
            <td>Name :</td>
            <td>
              <input
                type="text"
                :value="userData && token && (userData.name || token.name)"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
              />
            </td>
          </tr>
          <tr>
            <td>Gender :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
                :value="userData && userData.gender"
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
                :value="userData && userData.address"
              />
            </td>
          </tr>
          <tr>
            <td>Birthday :</td>
            <td>
              <input
                type="text"
                placeholder="Type here"
                class="max-w-m input input-bordered input-primary input-sm w-full"
                :value="userData && userData.birthday"
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
