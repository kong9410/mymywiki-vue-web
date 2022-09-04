<template>
    <div class="outter">
        <form class="form" :onsubmit="submit" method="post">
            <h3>회원가입</h3>
            <WikiInput placeholder="이메일" v-model="state.email" />
            <WikiInput
                placeholder="비밀번호"
                type="password"
                v-model="state.password"
            />
            <button class="submit-button-style" type="submit">가입하기</button>
        </form>
    </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axiosToApi from "../axios";
import WikiInput from "./common/WikiInput.vue";
export default {
    name: "SignUp",
    components: { WikiInput },
    setup() {
        const state = reactive({
            email: "",
            password: "",
        });

        const route = useRouter();

        const submit = (e) => {
            e.preventDefault();

            const data = {
                email: state.email,
                password: state.password,
            };

            axiosToApi
                .post("/auth/sign-up", JSON.stringify(data))
                .then(() => {
                    route.push("/sign-in");
                })
                .catch((err) => {
                    console.error(err);
                    if (err.response.data) {
                        alert(err.response.data);
                    }
                });
        };

        return {
            state,
            submit
        };
    }
};
</script>

<style scoped>
.outter {
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
}

.form {
    width: 25%;
    height: 600px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1em;
}

h3 {
    font-size: 2em;
    color: rgb(67, 126, 121);
}

.submit-button-style {
    margin-top: 50px;
    background: linear-gradient(to left, rgb(127, 189, 184), rgb(73, 136, 131));
    border: 0;
    border-radius: 1em;
    color: white;
    cursor: pointer;
    width: 80%;
    height: 50px;
    font-size: 1.2em;
}

.submit-button-style:hover {
    background: linear-gradient(to left, rgb(143, 211, 205), rgb(96, 172, 167));
}
</style>
