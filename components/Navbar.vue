<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl normal-case">Nuxt3 APP</a>
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink to="/todolist">Todo List</NuxtLink>
        </li>
        <li><a>天氣</a></li>
        <li><a>電影</a></li>
      </ul>
    </div>
    <div class="flex-none">
      <div class="dropdown-end dropdown">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge indicator-item badge-sm">8</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold text-neutral">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown-end dropdown ml-3">
        <label tabindex="0" class="avatar btn btn-circle btn-ghost online">
          <div class="w-10 rounded-full">
            <img src="@/assets/img/user.jpg" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 text-neutral shadow"
        >
          <li>
            <NuxtLink to="/profile">
              Profile
              <span class="badge">New</span>
            </NuxtLink>
          </li>
          <li><a>Settings</a></li>
          <li><button @click="githubSignOutHandler">Logout</button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth()

const githubSignOutHandler = async () => {
  await signOut({ callbackUrl: '/login' })
}
</script>
