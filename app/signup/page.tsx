import { FormSignUpPage } from "@/components/Signup/Form/FormSignUpPage";



export default async function SignUpPage() {
    return (
        <div className="card form">
            <h1 className="text-center mb-8">Step Into Future With AI Powered Finances</h1>
            <FormSignUpPage/>
        </div>
    );
}