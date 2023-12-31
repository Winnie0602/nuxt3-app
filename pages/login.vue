<template>
  <NuxtLayout name="login">
    <!-- 登入錯誤訊息 -->
    <dialog ref="modal" class="modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">ERROR!</h3>
        <p class="py-4 text-error">錯誤的信箱或密碼！</p>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <div class="hero relative min-h-screen bg-primary">
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
          <div class="card-body">
            <div v-if="showErrorMessage" class="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>錯誤的信箱或密碼！</span>
            </div>
            <form action="" @submit.prevent="onSubmit">
              <div class="form-control">
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Email</span>
                    <span class="label-text-alt text-error">{{
                      errors.email
                    }}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    :class="{ 'input-error': errors.email || showErrorMessage }"
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
                    <span class="label-text-alt text-error">{{
                      errors.password
                    }}</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                    :class="{
                      'input-error': errors.password || showErrorMessage,
                    }"
                    v-bind="password"
                  />
                  <label class="label">
                    <span class="label-text-alt"></span>
                    <span class="label-text-alt"></span>
                  </label>
                </div>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-outline">Login</button>
              </div>
            </form>

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
              <button style="width: 150px" class="btn btn-error">
                XXXXXXXXX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import { setLocale } from 'yup'
import zhHant from '~/utils/zh-hant.json'

setLocale(zhHant)

// Creates a typed schema for vee-validate
const schema = toTypedSchema(
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
)

// 建立表單
const { errors, defineInputBinds, handleSubmit } = useForm({
  // 建立初始值
  initialValues: {
    email: 'test@gmail.com',
    password: 'password',
  },
  // 驗證方式: 使用yup
  validationSchema: schema,
})

// 定義欄位
const email = defineInputBinds('email', {
  validateOnInput: true,
})
const password = defineInputBinds('password', {
  validateOnInput: true,
})

// 提交API、登入跳轉
const onSubmit = handleSubmit(async (values) => {
  // alert(JSON.stringify(values, null, 2))

  const { error, url }: any = await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false,
    callbackUrl: '/todolist',
  })

  if (error) {
    showErrorMessage.value = true
  } else {
    return navigateTo(url, { external: true })
  }
})

// 控制顯示錯誤訊息
const showErrorMessage = ref(false)

// OAuth
const { signIn } = useAuth()
// const loggedIn = computed(() => status.value === 'authenticated')

const githubSignInHandler = async () => {
  await signIn('github', { callbackUrl: '/todolist' })
}

// 設定layout
definePageMeta({
  layout: false,
  auth: {
    // 設定custom page
    // unauthenticatedOnly: true,
    // 設定導頁
    navigateAuthenticatedTo: '/todolist',
  },
})
</script>
