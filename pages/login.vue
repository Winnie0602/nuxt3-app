<template>
  <NuxtLayout name="login">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
                <pre>values: {{ values }}</pre>
              </label>
              <input
                v-bind="email"
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-bind="password"
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="link-hover link label-text-alt"
                  >Forgot password?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
const { values, defineInputBinds } = useForm()

const email = defineInputBinds('email')
const password = defineInputBinds('password')
definePageMeta({
  layout: false,
})
</script>