import { SignIn } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
	const { user, isLoaded, isSignedIn } = useUser();

	if (isSignedIn && isLoaded) {
		return <Navigate to={"/"} />;
	}
	return (
		<div className="h-screen grid place-items-center">
			<SignIn />
		</div>
	);
};

export default SignInPage;
