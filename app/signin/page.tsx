import { FormSignInPage } from "@/components/SignIn/Form/FormSignInPage";



export default async function SignInPage() {
    return (
        <div className="card form">
                    <h1 className="text-center mb-8">Welcome Back. Hop In!</h1>
                    <FormSignInPage/>
                </div>
    );
}