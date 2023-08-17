<template>
  <div class="navbar bg-neutral text-neutral-content">
    <a class="btn btn-ghost text-xl normal-case">Nuxt3 APP</a>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Todo List</a></li>
        <li><a>天氣</a></li>
        <li><a>電影</a></li>
        <li><button @click="githubSignOutHandler">登出</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth()

const githubSignOutHandler = async () => {
  await signOut({ callbackUrl: '/login' })
}
</script>
