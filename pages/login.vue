<template>
  <NuxtLayout name="login">
    <div class="hero min-h-screen bg-secondary-content">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="mx-5 text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form action="" @submit="onSubmit">
            <div class="card-body">
              <div class="form-control">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Email</span>
                    <span class="label-text-alt">{{ errors.email }}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    v-bind="email"
                  />
                  <label class="label">
                    <span class="label-text-alt"></span>
                    <span class="label-text-alt"></span>
                  </label>
                </div>
              </div>
              <div class="form-control">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Password</span>
                    <span class="label-text-alt">{{ errors.password }}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    v-bind="password"
                  />
                  <label class="label">
                    <span class="label-text-alt"></span>
                    <span class="label-text-alt"></span>
                  </label>
                </div>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-error btn-outline">Login</button>
              </div>
              <div class="form-control flex flex-row justify-between">
                <button
                  style="width: 150px"
                  class="btn btn-error"
                  @click="githubSignInHandler"
                >
                  <img
                    src="~/assets/img/github-mark/github-mark-white.svg"
                    style="width: 35px"
                    alt=""
                  />
                  Github
                </button>
                <button
                  style="width: 150px"
                  class="btn btn-error"
                  @click="githubSignOutHandler"
                >
                  XXXXXXXXX
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useForm, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { setLocale } from 'yup'
import zhHant from '~/utils/zh-hant.json'

// 表單驗證
configure({
  bails: false,
  validateOnModelUpdate: false,
  validateOnChange: false,
  validateOnBlur: false,
})

setLocale(zhHant)

const { errors, defineInputBinds, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    }),
  ),
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

const email = defineInputBinds('email')
const password = defineInputBinds('password')

// OAuth
const { signIn, signOut } = useAuth()
// status.value: `unauthenticated`, `loading`, `authenticated`
// data.value, e.g., expiration, user.email, ...
// const loggedIn = computed(() => status.value === 'authenticated')

const githubSignInHandler = async () => {
  await signIn()
}

const githubSignOutHandler = async () => {
  await signOut()
}

// 設定只有未登入者可以看此頁面
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/todolist',
  },
})

// 設定layout
definePageMeta({
  layout: false,
})
</script>
