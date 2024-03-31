import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        cardNotRegister: resolve(__dirname, "card-not-register.html"),
        loanRequestInfo: resolve(__dirname, "loan-request-info.html"),
        loanRequest: resolve(__dirname, "loan-request.html"),
        login: resolve(__dirname, "login.html"),
        placeALoan: resolve(__dirname, "place-a-loan.html"),
        settingProfile: resolve(__dirname, "setting-profile.html"),
        signUp: resolve(__dirname, "sign-up.html"),
      },
    },
  },
});
