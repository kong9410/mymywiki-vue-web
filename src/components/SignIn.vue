<template>
    <div class="outter">
        <form class="form" :onsubmit="submit" method="post">
            <h3>로그인</h3>
            <WikiInput placeholder="이메일" v-model="email"/>
            <WikiInput placeholder="비밀번호" type="password" v-model="password"/>
            <button class="submit-button-style" type="submit">로그인</button>
        </form>
    </div>
</template>

<script>
import wikiAxios from "@/axios";
import WikiInput from "./common/WikiInput.vue";
export default {
    name: "SignIn",
    components: { WikiInput },
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();

            const data = {
                email: this.email,
                password: this.password
            };

            wikiAxios.post("/auth/sign-in", JSON.stringify(data))
                .then(() => {
                    this.$router.push('/');
                })
                .catch(() => {
                    alert("아이디가 없거나 비밀번호가 잘못됐습니다.");
                })
        },
    },
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
